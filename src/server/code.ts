import { GetLatestUnreadPurchases, MarkThreadAsRead } from "./utils/emailFunctions";
import { AddPurchaseToSheet, GetMonthPurchases } from "./utils/sheetFunctions";
import { Purchase, PurchaseCategory, FormObjToPurchase } from "../shared/types";
import { GetExpectedPurchaseCategory, GetProps } from "./utils/propFunctions";

// @ts-ignore
global.doGet = (e) => {
    return HtmlService.createHtmlOutputFromFile('dist/index.html').setSandboxMode(HtmlService.SandboxMode.IFRAME).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).addMetaTag('viewport', 'width=device-width, initial-scale=1').setTitle("BudgetApp");
};

// @ts-ignore
global.GetLatestUnreadPurchases = () => {
    return GetLatestUnreadPurchases();
}

// @ts-ignore
global.GetCurrentMonthPurchases = () => {
    const currDate = new Date();

    const monthName = currDate.toLocaleString('default', { month: 'long' });
    const fullYear = currDate.getFullYear();

    const result = GetMonthPurchases(monthName, fullYear);

    // @ts-ignore
    const prevMonthTotal = global.GetTotal30DaysAgo();

    return JSON.stringify({...result, prevMonthTotal});
}

// @ts-ignore
global.GetTotal30DaysAgo = () => {
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
        if (new Date(purhcase.isoDate) <= newDate){
            runningTotal += purhcase.amount;
        }
    }

    return runningTotal;
}

// @ts-ignore
global.SubmitNewPurchase = (formObject) => {

    const purchase = FormObjToPurchase(formObject)
    AddPurchaseToSheet(purchase);

    if (purchase.threadId) {
        MarkThreadAsRead(purchase.threadId);
    }

    return purchase;
}

// @ts-ignore
global.MarkPurchaseAsRead = (purchase: Purchase) => {
    if (purchase.threadId) {
        MarkThreadAsRead(purchase.threadId);
    }

    return purchase;
}

// @ts-ignore
global.test = () => {
    Logger.log("Test Function");
};

// @ts-ignore
global.setScriptProp = () => {

    const labelsToEdit = [
        {
            key: 'MAIN_SHEET_ID',
            value: '<sheet id>'
        },
        {
            key: 'EMAIL_UNREAD_LABEL',
            value: '<unread label>'
        },
        {
            key: 'EMAIL_READ_LABEL',
            value: '<read label>'
        }
    ];

    const scriptProps = PropertiesService.getScriptProperties();
    for (const item of labelsToEdit) {
        scriptProps.setProperty(item.key, item.value);
    }

    return true;
}