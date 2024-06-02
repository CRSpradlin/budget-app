type Purchase = {
    threadId?: string,
    amount: number,
    category?: PurchaseCategory,
    isoDate: string,
    description: string,
    purchaseIndex?: number
}

const FormObjToPurchase = (formObject: { [key: string]: string }): Purchase => {
    return {
        threadId: formObject.threadId ? formObject.threadId : undefined,
        amount: parseFloat(formObject.amount),
        category: formObject.category ? PurchaseCategory[formObject.category] : undefined,
        isoDate: formObject.isoDate,
        description: formObject.description,
        purchaseIndex: formObject.purchaseIndex == undefined ?  undefined : parseInt(formObject.purchaseIndex)
    }
}

type PendingTransactionsTabState = {
    modalVisability: boolean,
    unreadPurchases: Purchase[],
    formAmount: string,
    formCategory: PurchaseCategory,
    formDescription: string,
    formThreadId: string,
    formISODate: string,
    formPurchaseIndex: number
}

enum PurchaseCategory {
    Rent = 'Rent',
    Utilities = 'Utilities',
    Grocery = 'Grocery',
    Dining = 'Dining',
    Dog = 'Dog',
    Car = 'Car',
    Shopping = 'Shopping',
    Uncategorized = 'Uncategorized'
}

export { Purchase, FormObjToPurchase, PurchaseCategory, PendingTransactionsTabState }