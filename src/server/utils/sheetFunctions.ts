import { GetProps, SetNewPurchaseCategoryUsage } from "./propFunctions";
import { Purchase, AmortizedPurchase, PurchaseCategory } from "../../shared/types";

const AMORTIZE_SHEET_NAME = 'Amortized Purchases';

const getNextEmptyRow = (sheet: GoogleAppsScript.Spreadsheet.Sheet) => {
  const rangeValueArray = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).getValues();
  let emptyRowIndex = 1;
  for (const row of rangeValueArray) {
    if (row[0] == "")
      return emptyRowIndex;
    emptyRowIndex++;
  }
  throw Error(`Could not find an empty row for ${sheet.getName()}`);
}

const getSheetNameForPurchase = (purchase: Purchase) => {
  const purchaseDate = new Date(purchase.isoDate);
  const sheetName = `${purchaseDate.toLocaleString('default', { month: 'long' })}, ${purchaseDate.getFullYear()}`;

  return sheetName;
}

const getSheetForPurchase = (purchase: Purchase) => {
  const props = GetProps();
  const mainSheet = SpreadsheetApp.openById(props['MAIN_SHEET_ID']);

  const sheetName = getSheetNameForPurchase(purchase);

  let monthRecordSheet = mainSheet.getSheetByName(sheetName);
  if (!monthRecordSheet) {
    monthRecordSheet = mainSheet.insertSheet(sheetName, 1);
    monthRecordSheet.getRange(1, 1, 1, 7).setValues([['Amount', 'Category', 'Date', 'Description', 'Gmail I.D.', '', 'Total for Month']]);
    monthRecordSheet.getRange(2, 7).setFormula('=SUM(A:A)');

    includeAmortizedPurchasesForSheet(sheetName);
    // clearAmortizedPurchases(); //TODO: Is there a need to clear Amortized Purchases?
  }

  return monthRecordSheet;
}

const includeAmortizedPurchasesForSheet = (sheetName) => {
  const amortizedPurchases = getAmortizedPurchases();

  for (const aPurchase of amortizedPurchases) {
    if (aPurchase.applicableMonths.includes(sheetName)) {
      const purchase = convertAmortizePurchaseToPurchase(aPurchase);
      purchase.isoDate = new Date(sheetName).toISOString();
      AddPurchaseToSheet(purchase);
    }
  }
}

const getAmortizedSheet = () => {
  const props = GetProps();
  const mainSheet = SpreadsheetApp.openById(props['MAIN_SHEET_ID']);

  let amortizedSheet = mainSheet.getSheetByName(AMORTIZE_SHEET_NAME);
  if (!amortizedSheet) {
    amortizedSheet = mainSheet.insertSheet(AMORTIZE_SHEET_NAME, mainSheet.getNumSheets());
    amortizedSheet.getRange(1, 1, 1, 7).setValues([['Total Amount', 'Category', 'Date', 'Description', 'Gmail I.D.', 'Monthly Amount', 'Applied Months']]);
  }

  return amortizedSheet;
}

const getAmortizedPurchases = () => {
  const amortizedSheet = getAmortizedSheet();

  const amortizedSheetEntries = amortizedSheet.getRange(2, 1, amortizedSheet.getMaxRows(), 7).getValues();
  const amortizedPurchases: AmortizedPurchase[] = [];

  for (const amortizedEntry of amortizedSheetEntries) {
    if (amortizedEntry[0] == "") break;

    const amount = parseFloat(amortizedEntry[0]);
    const category = PurchaseCategory[amortizedEntry[1]];

    amortizedPurchases.push({
      amount,
      category,
      isoDate: amortizedEntry[2],
      description: amortizedEntry[3],
      threadId: amortizedEntry[4],
      monthlyAmount: amortizedEntry[5],
      applicableMonths: JSON.parse(amortizedEntry[6])
    })
  }

  return amortizedPurchases;
}

const convertAmortizePurchaseToPurchase = (amortizedPurchase: AmortizedPurchase) => {
  const purchase: Purchase = {
    amount: amortizedPurchase.monthlyAmount,
    category: amortizedPurchase.category,
    isoDate: amortizedPurchase.isoDate,
    description: amortizedPurchase.description,
    threadId: amortizedPurchase.threadId,
    purchaseIndex: amortizedPurchase.purchaseIndex
  }

  return purchase;
}

const AddAmortizedPurchase = (amortizedPurchase: AmortizedPurchase) => {
  const amortizedSheet = getAmortizedSheet();

  amortizedSheet.getRange(getNextEmptyRow(amortizedSheet), 1, 1, 7).setValues([
    [
      amortizedPurchase.amount,
      amortizedPurchase.category,
      amortizedPurchase.isoDate,
      amortizedPurchase.description,
      amortizedPurchase.threadId,
      amortizedPurchase.monthlyAmount,
      JSON.stringify(amortizedPurchase.applicableMonths)
    ]
  ]);

  const currentMonthPurchaseEntry = convertAmortizePurchaseToPurchase(amortizedPurchase);

  AddPurchaseToSheet(currentMonthPurchaseEntry);
}


const AddPurchaseToSheet = (newPurchase: Purchase) => {
  const monthRecordSheet = getSheetForPurchase(newPurchase);
  monthRecordSheet.getRange(getNextEmptyRow(monthRecordSheet), 1, 1, 5).setValues(
    [
      [
        newPurchase.amount,
        newPurchase.category ? newPurchase.category : 'Uncategorized',
        newPurchase.isoDate,
        newPurchase.description,
        newPurchase.threadId ? newPurchase.threadId : 'N/A'
      ]
    ]
  );

  SetNewPurchaseCategoryUsage(newPurchase);
}

const GetMonthPurchases = (monthName: string, fullYear: number) => {
  const props = GetProps();
  const mainSheet = SpreadsheetApp.openById(props['MAIN_SHEET_ID']);

  const monthRecordSheet = mainSheet.getSheetByName(`${monthName}, ${fullYear}`);
  const purchases: Purchase[] = [];
  const categoryResults: { [key: string]: number } = {};

  if (monthRecordSheet) {
    const purchaseRecordValues = monthRecordSheet.getRange(2, 1, monthRecordSheet.getMaxRows(), 5).getValues();

    for (const purchaseEntry of purchaseRecordValues) {
      if (purchaseEntry[0] == "") break;

      const amount = parseFloat(purchaseEntry[0]);
      const category = PurchaseCategory[purchaseEntry[1]];

      if (!categoryResults[category]) {
        categoryResults[category] = amount;
      } else {
        categoryResults[category] += amount;
      }

      purchases.push({
        amount,
        category,
        isoDate: purchaseEntry[2],
        description: purchaseEntry[3]
      })
    }
  }

  return { purchases, categories: categoryResults };
}

const GetTotal30DaysAgo = () => {
  const currDate = new Date();
  let newDate = new Date();
  const currMonth = currDate.getMonth();
  const expectedMonth = currMonth == 0 ? 11 : currMonth - 1;

  newDate.setMonth(expectedMonth);
  if (newDate.getMonth() != expectedMonth) {
    newDate = currDate;
    newDate.setDate(1);
    newDate.setDate(0);
  }

  const monthName = newDate.toLocaleString('default', { month: 'long' });
  const fullYear = newDate.getFullYear();

  const prevMonthPurchases = GetMonthPurchases(monthName, fullYear);

  let runningTotal = 0;
  for (let purhcase of prevMonthPurchases.purchases) {
    if (new Date(purhcase.isoDate) <= newDate) {
      runningTotal += purhcase.amount;
    }
  }

  return runningTotal;
}

export { AddPurchaseToSheet, AddAmortizedPurchase, GetMonthPurchases, GetTotal30DaysAgo }
