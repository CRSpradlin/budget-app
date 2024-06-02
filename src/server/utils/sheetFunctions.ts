import { GetProps, SetNewPurchaseCategoryUsage } from "./propFunctions";
import { Purchase, PurchaseCategory } from "../../shared/types";

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

const getSheetForPurchase = (purchase: Purchase) => {
    const props = GetProps();
    const mainSheet = SpreadsheetApp.openById(props['MAIN_SHEET_ID']);

    const purchaseDate = new Date(purchase.isoDate);
    const sheetName = `${purchaseDate.toLocaleString('default', { month: 'long' })}, ${purchaseDate.getFullYear()}`;

    let monthRecordSheet = mainSheet.getSheetByName(sheetName);
    if (!monthRecordSheet) {
        monthRecordSheet = mainSheet.insertSheet(sheetName, 1);
        monthRecordSheet.getRange(1, 1, 1, 7).setValues([['Amount', 'Category', 'Date', 'Description', 'Gmail I.D.', '', 'Total for Month']]);
        monthRecordSheet.getRange(2, 7).setFormula('=SUM(A:A)');
    } 

    return monthRecordSheet;
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
    const categoryResults: {[key: string]: number} = {};

    if (monthRecordSheet) {
        const purchaseRecordValues = monthRecordSheet.getRange(2, 1, monthRecordSheet.getMaxRows(), 5).getValues();

        for (const purchaseEntry of purchaseRecordValues) {
            if(purchaseEntry[0] == "") break;

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

export { AddPurchaseToSheet, GetMonthPurchases }