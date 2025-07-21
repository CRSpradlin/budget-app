type Purchase = {
  threadId?: string,
  amount: number,
  category?: PurchaseCategory,
  isoDate: string,
  description: string,
  purchaseIndex?: number,
  loading?: boolean
}

type AmortizedPurchase = {
  threadId?: string,
  amount: number,
  category?: PurchaseCategory,
  isoDate: string,
  description: string,
  monthlyAmount: number,
  applicableMonths: [string],
  purchaseIndex?: number
}

type MonthlySummaryTabType = {
  loading: boolean,
  purchases: Purchase[],
  categories: {},
  prevMonthTotal: number,
  reloadData: () => void
}

type PendingTransactionsTabType = {
  loading: boolean,
  unreadPurchases: Purchase[],
  setLoading: (value: boolean) => void,
  updateUnreadPurchases: (unreadPurchases: Purchase[]) => void,
  reloadData: () => void
}

const FormObjToAmortizedPurchase = (formObject: { [key: string]: string }): AmortizedPurchase => {
  const amortizedPurchase: AmortizedPurchase = {
    threadId: formObject.threadId ? formObject.threadId : undefined,
    amount: parseFloat(formObject.amount),
    category: formObject.category ? PurchaseCategory[formObject.category] : undefined,
    isoDate: formObject.isoDate,
    description: `[Amortized ${new Date(formObject.isoDate).toLocaleString('default', { month: 'long' })}, ${new Date(formObject.isoDate).getFullYear()}] ${formObject.description}`,
    monthlyAmount: parseFloat(formObject.amount) / parseInt(formObject.amortizedLength),
    applicableMonths: ['NONE'],
    purchaseIndex: formObject.purchaseIndex == undefined ? undefined : parseInt(formObject.purchaseIndex)
  }

  calculateAmortizedMonthList(amortizedPurchase, parseInt(formObject.amortizedLength));

  return amortizedPurchase;
}
const calculateAmortizedMonthList = (amortizedPurchase, amortizedLength) => {
  const monthList: string[] = [];
  const runningDate = new Date(amortizedPurchase.isoDate);
  runningDate.setDate(1);

  for (let i = 0; i < amortizedLength; i++) {
    const monthName = runningDate.toLocaleString('default', { month: 'long' });
    const fullYear = runningDate.getFullYear();

    monthList.push(`${monthName}, ${fullYear}`);

    runningDate.setMonth(runningDate.getMonth() + 1);
  }

  amortizedPurchase.applicableMonths = monthList;
}

const FormObjToPurchase = (formObject: { [key: string]: string }): Purchase => {
  return {
    threadId: formObject.threadId ? formObject.threadId : undefined,
    amount: parseFloat(formObject.amount),
    category: formObject.category ? PurchaseCategory[formObject.category] : undefined,
    isoDate: formObject.isoDate,
    description: formObject.description,
    purchaseIndex: formObject.purchaseIndex == undefined ? undefined : parseInt(formObject.purchaseIndex)
  }
}

type PendingTransactionsTabStateType = {
  modalVisability: boolean,
  formAmount: string,
  formCategory: PurchaseCategory,
  formDescription: string,
  formThreadId: string,
  formISODate: string,
  formPurchaseIndex: number,
  amortized: boolean,
  amortizedLength: string,
  processingPurchaseIndexes: string[]
}

type RootStateType = {
  activeTabName: string,
  loading: boolean,
  purchases: Purchase[],
  categories: {},
  prevMonthTotal: number,
  unreadPurchases: Purchase[]
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

export { Purchase, AmortizedPurchase, MonthlySummaryTabType, PendingTransactionsTabType, FormObjToAmortizedPurchase, FormObjToPurchase, PurchaseCategory, PendingTransactionsTabStateType, RootStateType }
