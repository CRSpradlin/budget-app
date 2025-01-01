import { GetLatestUnreadPurchases, MarkThreadAsRead } from "./utils/emailFunctions";
import { AddAmortizedPurchase, AddPurchaseToSheet, GetMonthPurchases, GetTotal30DaysAgo } from "./utils/sheetFunctions";
import { Purchase, FormObjToAmortizedPurchase, FormObjToPurchase } from "../shared/types";

// @ts-ignore
global.doGet = (e) => {
    return HtmlService.createHtmlOutputFromFile('dist/index.html').setSandboxMode(HtmlService.SandboxMode.IFRAME).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).addMetaTag('viewport', 'width=device-width, initial-scale=1').setTitle("BudgetApp");
};

// @ts-ignore
global.ReloadData = () => {
    const currDate = new Date();

    const monthName = currDate.toLocaleString('default', { month: 'long' });
    const fullYear = currDate.getFullYear();

    const result = GetMonthPurchases(monthName, fullYear);

    const prevMonthTotal = GetTotal30DaysAgo();

    const unreadPurchases = GetLatestUnreadPurchases();

    return JSON.stringify({...result, prevMonthTotal, unreadPurchases});
}

// @ts-ignore
global.SubmitNewPurchase = (formObject) => {
    let purchase;
    if (JSON.parse(formObject.amortized) == true && parseInt(formObject.amortizedLength) > 1) {
        purchase = FormObjToAmortizedPurchase(formObject);
        AddAmortizedPurchase(purchase);
    } else {
        purchase = FormObjToPurchase(formObject)
        AddPurchaseToSheet(purchase);
    }

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