function doGet(e) {}

function GetLatestUnreadPurchases() {}

function GetCurrentMonthPurchases() {}

function GetTotal30DaysAgo() {}

function SubmitNewPurchase(formObject) {}

function MarkPurchaseAsRead(purchase) {}

function test() {}

function setScriptProp() {}

 /******/ (() => {
    // webpackBootstrap
    /******/ "use strict";
    /******/ // The require scope
    /******/    var __webpack_require__ = {};
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/global */
    /******/    
    /******/ __webpack_require__.g = function() {
        /******/ if ("object" == typeof globalThis) return globalThis;
        /******/        try {
            /******/ return this || new Function("return this")();
            /******/        } catch (e) {
            /******/ if ("object" == typeof window) return window;
            /******/        }
        /******/    }(), 
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = exports => {
        /******/ "undefined" != typeof Symbol && Symbol.toStringTag && 
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        })
        /******/ , Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }
    /******/;
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // ESM COMPAT FLAG
        __webpack_require__.r(__webpack_exports__);
    // CONCATENATED MODULE: ./src/shared/types.ts
    var PurchaseCategory, calculateAmortizedMonthList = function(amortizedPurchase, amortizedLength) {
        var monthList = [], runningDate = new Date(amortizedPurchase.isoDate);
        runningDate.setDate(1);
        for (var i = 0; i < amortizedLength; i++) {
            var monthName = runningDate.toLocaleString("default", {
                month: "long"
            }), fullYear = runningDate.getFullYear();
            monthList.push("".concat(monthName, ", ").concat(fullYear)), runningDate.setMonth(runningDate.getMonth() + 1);
        }
        amortizedPurchase.applicableMonths = monthList;
    };
    !function(PurchaseCategory) {
        PurchaseCategory.Rent = "Rent", PurchaseCategory.Utilities = "Utilities", PurchaseCategory.Grocery = "Grocery", 
        PurchaseCategory.Dining = "Dining", PurchaseCategory.Dog = "Dog", PurchaseCategory.Car = "Car", 
        PurchaseCategory.Shopping = "Shopping", PurchaseCategory.Uncategorized = "Uncategorized";
    }(PurchaseCategory || (PurchaseCategory = {}));
    // CONCATENATED MODULE: ./src/server/utils/propFunctions.ts
    var GetProps = function() {
        return PropertiesService.getScriptProperties().getProperties();
    }, MarkThreadAsRead = function(threadId) {
        var props = GetProps();
        GmailApp.getThreadById(threadId).addLabel(GmailApp.getUserLabelByName(props.EMAIL_READ_LABEL)), 
        GmailApp.getThreadById(threadId).removeLabel(GmailApp.getUserLabelByName(props.EMAIL_UNREAD_LABEL));
    }, getNextEmptyRow = function(sheet) {
        for (var emptyRowIndex = 1, _i = 0, rangeValueArray_1 = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).getValues(); _i < rangeValueArray_1.length; _i++) {
            if ("" == rangeValueArray_1[_i][0]) return emptyRowIndex;
            emptyRowIndex++;
        }
        throw Error("Could not find an empty row for ".concat(sheet.getName()));
    }, getSheetForPurchase = function(purchase) {
        var props = GetProps(), mainSheet = SpreadsheetApp.openById(props.MAIN_SHEET_ID), sheetName = function(purchase) {
            var purchaseDate = new Date(purchase.isoDate);
            return "".concat(purchaseDate.toLocaleString("default", {
                month: "long"
            }), ", ").concat(purchaseDate.getFullYear());
        }(purchase), monthRecordSheet = mainSheet.getSheetByName(sheetName);
        return monthRecordSheet || ((monthRecordSheet = mainSheet.insertSheet(sheetName, 1)).getRange(1, 1, 1, 7).setValues([ [ "Amount", "Category", "Date", "Description", "Gmail I.D.", "", "Total for Month" ] ]), 
        monthRecordSheet.getRange(2, 7).setFormula("=SUM(A:A)"), includeAmortizedPurchasesForSheet(sheetName)), 
        monthRecordSheet;
    }, includeAmortizedPurchasesForSheet = function(sheetName) {
        for (var _i = 0, amortizedPurchases_1 = getAmortizedPurchases(); _i < amortizedPurchases_1.length; _i++) {
            var aPurchase = amortizedPurchases_1[_i];
            if (aPurchase.applicableMonths.includes(sheetName)) {
                var purchase = convertAmortizePurchaseToPurchase(aPurchase);
                purchase.isoDate = new Date(sheetName).toISOString(), AddPurchaseToSheet(purchase);
            }
        }
    }, getAmortizedSheet = function() {
        var props = GetProps(), mainSheet = SpreadsheetApp.openById(props.MAIN_SHEET_ID), amortizedSheet = mainSheet.getSheetByName("Amortized Purchases");
        return amortizedSheet || (amortizedSheet = mainSheet.insertSheet("Amortized Purchases", mainSheet.getNumSheets())).getRange(1, 1, 1, 7).setValues([ [ "Total Amount", "Category", "Date", "Description", "Gmail I.D.", "Monthly Amount", "Applied Months" ] ]), 
        amortizedSheet;
    }, getAmortizedPurchases = function() {
        for (var amortizedSheet = getAmortizedSheet(), amortizedPurchases = [], _i = 0, amortizedSheetEntries_1 = amortizedSheet.getRange(2, 1, amortizedSheet.getMaxRows(), 7).getValues(); _i < amortizedSheetEntries_1.length; _i++) {
            var amortizedEntry = amortizedSheetEntries_1[_i];
            if ("" == amortizedEntry[0]) break;
            var amount = parseFloat(amortizedEntry[0]), category = PurchaseCategory[amortizedEntry[1]];
            amortizedPurchases.push({
                amount,
                category,
                isoDate: amortizedEntry[2],
                description: amortizedEntry[3],
                threadId: amortizedEntry[4],
                monthlyAmount: amortizedEntry[5],
                applicableMonths: JSON.parse(amortizedEntry[6])
            });
        }
        return amortizedPurchases;
    }, convertAmortizePurchaseToPurchase = function(amortizedPurchase) {
        return {
            amount: amortizedPurchase.monthlyAmount,
            category: amortizedPurchase.category,
            isoDate: amortizedPurchase.isoDate,
            description: amortizedPurchase.description,
            threadId: amortizedPurchase.threadId,
            purchaseIndex: amortizedPurchase.purchaseIndex
        };
    }, AddPurchaseToSheet = function(newPurchase) {
        var monthRecordSheet = getSheetForPurchase(newPurchase);
        monthRecordSheet.getRange(getNextEmptyRow(monthRecordSheet), 1, 1, 5).setValues([ [ newPurchase.amount, newPurchase.category ? newPurchase.category : "Uncategorized", newPurchase.isoDate, newPurchase.description, newPurchase.threadId ? newPurchase.threadId : "N/A" ] ]), 
        function(newPurchase) {
            var scriptProps = PropertiesService.getScriptProperties(), categoryMapping = JSON.parse(scriptProps.getProperty("TRANSACTION_MAP") || "{}");
            categoryMapping[newPurchase.description.replace(/\$([0-9,.]+)/, "").replace(/ \(Add. Tip: \$([0-9,.]+)\)/, "")] = newPurchase.category, 
            scriptProps.setProperty("TRANSACTION_MAP", JSON.stringify(categoryMapping));
        }(newPurchase);
    }, GetMonthPurchases = function(monthName, fullYear) {
        var props = GetProps(), monthRecordSheet = SpreadsheetApp.openById(props.MAIN_SHEET_ID).getSheetByName("".concat(monthName, ", ").concat(fullYear)), purchases = [], categoryResults = {};
        if (monthRecordSheet) for (var _i = 0, purchaseRecordValues_1 = monthRecordSheet.getRange(2, 1, monthRecordSheet.getMaxRows(), 5).getValues(); _i < purchaseRecordValues_1.length; _i++) {
            var purchaseEntry = purchaseRecordValues_1[_i];
            if ("" == purchaseEntry[0]) break;
            var amount = parseFloat(purchaseEntry[0]), category = PurchaseCategory[purchaseEntry[1]];
            categoryResults[category] ? categoryResults[category] += amount : categoryResults[category] = amount, 
            purchases.push({
                amount,
                category,
                isoDate: purchaseEntry[2],
                description: purchaseEntry[3]
            });
        }
        return {
            purchases,
            categories: categoryResults
        };
    }, __assign = undefined && undefined.__assign || function() {
        return __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
            return t;
        }, __assign.apply(this, arguments);
    };
    __webpack_require__.g.doGet = function(e) {
        return HtmlService.createHtmlOutputFromFile("dist/index.html").setSandboxMode(HtmlService.SandboxMode.IFRAME).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).addMetaTag("viewport", "width=device-width, initial-scale=1").setTitle("BudgetApp");
    }, __webpack_require__.g.GetLatestUnreadPurchases = function() {
        return function() {
            var mail, purchaseDescription, scriptProps, categoryMapping, props = GetProps(), result = [], index = 0;
            do {
                for (var _i = 0, mail_1 = mail = GmailApp.search("label:".concat(props.EMAIL_UNREAD_LABEL), index, 50); _i < mail_1.length; _i++) {
                    var thread = mail_1[_i], message = thread.getMessages()[0], subject = message.getSubject(), body = message.getPlainBody(), amountMatch = subject.match(/\$([0-9,.]+)/);
                    null == amountMatch && (amountMatch = body.match(/\$([0-9,.]+)/));
                    var amount = null == amountMatch ? 0 : parseFloat(amountMatch[1]), description = subject;
                    if (props.DESCRIPTION_REGEX) {
                        var potentialDescriptions = new RegExp(props.DESCRIPTION_REGEX, "g").exec(body);
                        if (potentialDescriptions) for (var i = 1; i < potentialDescriptions.length; i++) if (potentialDescriptions[i] != undefined) {
                            description = potentialDescriptions[i];
                            break;
                        }
                    }
                    var newPurchase = {
                        threadId: thread.getId(),
                        amount,
                        isoDate: thread.getLastMessageDate().toLocaleString(),
                        description,
                        category: (purchaseDescription = description, scriptProps = void 0, categoryMapping = void 0, 
                        scriptProps = PropertiesService.getScriptProperties(), categoryMapping = JSON.parse(scriptProps.getProperty("TRANSACTION_MAP") || "{}"), 
                        PurchaseCategory[categoryMapping[purchaseDescription.replace(/\$([0-9,.]+)/, "")] || "Uncategorized"])
                    };
                    result.unshift(newPurchase), index++;
                }
            } while (0 != mail.length);
            return result;
        }();
    }, __webpack_require__.g.GetCurrentMonthPurchases = function() {
        var currDate = new Date, monthName = currDate.toLocaleString("default", {
            month: "long"
        }), fullYear = currDate.getFullYear(), result = GetMonthPurchases(monthName, fullYear), prevMonthTotal = __webpack_require__.g.GetTotal30DaysAgo();
        return JSON.stringify(__assign(__assign({}, result), {
            prevMonthTotal
        }));
    }, __webpack_require__.g.GetTotal30DaysAgo = function() {
        var currDate = new Date, newDate = new Date, currMonth = currDate.getMonth(), expectedMonth = 0 == currMonth ? 11 : currMonth - 1;
        newDate.setMonth(expectedMonth), newDate.getMonth() != expectedMonth && ((newDate = currDate).setDate(1), 
        newDate.setDate(0));
        for (var monthName = newDate.toLocaleString("default", {
            month: "long"
        }), fullYear = newDate.getFullYear(), runningTotal = 0, _i = 0, _a = GetMonthPurchases(monthName, fullYear).purchases; _i < _a.length; _i++) {
            var purhcase = _a[_i];
            new Date(purhcase.isoDate) <= newDate && (runningTotal += purhcase.amount);
        }
        return runningTotal;
    }, __webpack_require__.g.SubmitNewPurchase = function(formObject) {
        var purchase;
        return 1 == JSON.parse(formObject.amortized) && parseInt(formObject.amortizedLength) > 1 ? (purchase = function(formObject) {
            var amortizedPurchase = {
                threadId: formObject.threadId ? formObject.threadId : undefined,
                amount: parseFloat(formObject.amount),
                category: formObject.category ? PurchaseCategory[formObject.category] : undefined,
                isoDate: formObject.isoDate,
                description: formObject.description,
                monthlyAmount: parseFloat(formObject.amount) / parseInt(formObject.amortizedLength),
                applicableMonths: [ "NONE" ],
                purchaseIndex: formObject.purchaseIndex == undefined ? undefined : parseInt(formObject.purchaseIndex)
            };
            return calculateAmortizedMonthList(amortizedPurchase, parseInt(formObject.amortizedLength)), 
            amortizedPurchase;
        }(formObject), function(amortizedPurchase) {
            var amortizedSheet = getAmortizedSheet();
            amortizedSheet.getRange(getNextEmptyRow(amortizedSheet), 1, 1, 7).setValues([ [ amortizedPurchase.amount, amortizedPurchase.category, amortizedPurchase.isoDate, amortizedPurchase.description, amortizedPurchase.threadId, amortizedPurchase.monthlyAmount, JSON.stringify(amortizedPurchase.applicableMonths) ] ]);
            var currentMonthPurchaseEntry = convertAmortizePurchaseToPurchase(amortizedPurchase);
            AddPurchaseToSheet(currentMonthPurchaseEntry);
        }(purchase)) : (purchase = function(formObject) {
            return {
                threadId: formObject.threadId ? formObject.threadId : undefined,
                amount: parseFloat(formObject.amount),
                category: formObject.category ? PurchaseCategory[formObject.category] : undefined,
                isoDate: formObject.isoDate,
                description: formObject.description,
                purchaseIndex: formObject.purchaseIndex == undefined ? undefined : parseInt(formObject.purchaseIndex)
            };
        }(formObject), AddPurchaseToSheet(purchase)), purchase.threadId && MarkThreadAsRead(purchase.threadId), 
        purchase;
    }, __webpack_require__.g.MarkPurchaseAsRead = function(purchase) {
        return purchase.threadId && MarkThreadAsRead(purchase.threadId), purchase;
    }, __webpack_require__.g.test = function() {
        Logger.log("Test Function");
    }, __webpack_require__.g.setScriptProp = function() {
        for (var scriptProps = PropertiesService.getScriptProperties(), _i = 0, labelsToEdit_1 = [ {
            key: "MAIN_SHEET_ID",
            value: "<sheet id>"
        }, {
            key: "EMAIL_UNREAD_LABEL",
            value: "<unread label>"
        }, {
            key: "EMAIL_READ_LABEL",
            value: "<read label>"
        } ]; _i < labelsToEdit_1.length; _i++) {
            var item = labelsToEdit_1[_i];
            scriptProps.setProperty(item.key, item.value);
        }
        return !0;
    };
    for (var i in __webpack_exports__) this[i] = __webpack_exports__[i];
    __webpack_exports__.__esModule && Object.defineProperty(this, "__esModule", {
        value: !0
    })
    /******/;
})();