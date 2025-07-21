import React from "react";
import GmailConfirmModal from "./gmailConfirmModal";
import { PendingTransactionsTabStateType, Purchase, FormObjToPurchase, PurchaseCategory, PendingTransactionsTabType } from "../../shared/types";
import AmortizedFormInput from "./amortizedFormInput"

export default class PendingTransactionsTab extends React.Component<PendingTransactionsTabType> {

  constructor(props) {
    super(props);
  };

  state: PendingTransactionsTabStateType = {
    modalVisability: false,
    formAmount: "",
    formCategory: PurchaseCategory.Uncategorized,
    formDescription: "",
    formThreadId: "",
    formISODate: new Date().toLocaleString(),
    formPurchaseIndex: -1,
    amortized: false,
    amortizedLength: "1",
    processingPurchaseIndexes: []
  }

  public resetForm = () => {
    this.setState((currState: PendingTransactionsTabStateType) => {
      return {
        ...currState,
        formAmount: "",
        formDescription: "",
        formThreadId: "",
        formISODate: new Date().toLocaleString(),
        formPurchaseIndex: -1,
        amortized: false,
        amortizedLength: "1"
      }
    });
  }

  public setCategory = (category: PurchaseCategory) => {
    this.setState({
      formCategory: category
    });
  }
  public setAmount = (amount: string) => {
    this.setState({
      formAmount: amount
    });
  }
  public setDescription = (description: string) => {
    this.setState({
      formDescription: description
    });
  }
  public setAmortizedLength = (numOfMonths: string) => {
    this.setState({
      amortizedLength: numOfMonths
    })
  }
  public setAmortized = (amortized: boolean) => {
    this.setState({
      amortized: amortized
    })
  }

  public setModalVis = (newVis: boolean, runSubmit: boolean, index: number = -1) => {
    this.setState({
      modalVisability: newVis
    });

    if (runSubmit) {
      this.props.setLoading(true);
      this.setState((currState: PendingTransactionsTabStateType) => {
        return {
          ...currState,
          processingPurchaseIndexes: [...currState.processingPurchaseIndexes, index.toString()]
        }
      });
      // @ts-ignore
      google.script.run
        .withSuccessHandler((resp: Purchase) => this.handleFormSuccess(resp, index)) //needs its own success func
        .withFailureHandler((resp: Error) => this.handleFailure(resp, index))
        .SubmitNewPurchase(document.getElementById('newPurchaseForm'));
    }

    if (newVis == false) {
      this.resetForm();
    }
  }

  public handleFormSuccess = (purchase: Purchase, index: number = -1) => {
    this.setState((currState: PendingTransactionsTabStateType) => {
      return {
        ...currState,
        processingPurchaseIndexes: currState.processingPurchaseIndexes.splice(currState.processingPurchaseIndexes.indexOf(index.toString()), 1)
      }
    });

    this.props.reloadData();
  };

  public handleFailure = (error: Error, index: number = -1) => {
    this.props.setLoading(false);
    this.setState((currState: PendingTransactionsTabStateType) => {
      return {
        ...currState,
        processingPurchaseIndexes: currState.processingPurchaseIndexes.splice(currState.processingPurchaseIndexes.indexOf(index.toString()), 1)
      }
    });
    alert('Error Occured: ' + error.message);
  }

  public setFormInputsWithPurchase = (purchase: Purchase, index: number) => {
    this.setState((currState: PendingTransactionsTabStateType) => {
      return {
        formAmount: purchase.amount,
        formCategory: purchase.category || PurchaseCategory.Uncategorized,
        formDescription: purchase.description,
        formThreadId: purchase.threadId,
        formISODate: purchase.isoDate,
        formPurchaseIndex: index,
      }
    });
    this.handleSubmit(null);
  }

  public deletePurchase = (purchase: Purchase, index: number) => {
    this.props.setLoading(true);
    this.setState((currState: PendingTransactionsTabStateType) => {
      console.log(currState.processingPurchaseIndexes, [...currState.processingPurchaseIndexes, index.toString()])
      return {
        ...currState,
        processingPurchaseIndexes: [...currState.processingPurchaseIndexes, index.toString()]
      }
    });
    purchase.purchaseIndex = index;

    // @ts-ignore
    google.script.run
      .withSuccessHandler((resp: Purchase) => this.handleFormSuccess(resp, index))
      .withFailureHandler((resp: Error) => this.handleFailure(resp, index))
      .MarkPurchaseAsRead(purchase);
  }

  public handleSubmit = async (e, index = -1) => {
    if (e) {
      e.preventDefault();
      this.props.setLoading(true);
      this.setState((currState: PendingTransactionsTabStateType) => {
        return {
          ...currState,
          processingPurchaseIndexes: [...currState.processingPurchaseIndexes, index.toString()]
        }
      });
      // @ts-ignore
      google.script.run
        .withSuccessHandler((purchase: Purchase) => this.handleFormSuccess(purchase, index))
        .withFailureHandler((error) => this.handleFailure(error, index))
        .SubmitNewPurchase(document.getElementById('newPurchaseForm'));

      this.resetForm();
    } else {
      this.setModalVis(true, false, index);
    }
  }

  public render() {
    return (
      <div className="content-center">
        <div className="text-budget-dark text-xl font-bold p-6">Submit New Transaction</div>
        <form id="newPurchaseForm" onSubmit={this.handleSubmit}>
          <div className="m-5">
            <label>Transaction Amount: </label>
            <input value={this.state.formAmount} onChange={(e) => this.setAmount(e.target.value)} type="text" pattern="^\d*(\.\d{0,2})?$" name="amount" required />
          </div>
          <div className="m-5">
            <label>Category: </label>
            <select name="category" value={this.state.formCategory} onChange={(e) => this.setCategory(PurchaseCategory[e.target.value])} required className="bg-white">
              {Object.keys(PurchaseCategory).map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="m-5">
            <label>Description: </label>
            <input value={this.state.formDescription} onChange={(e) => this.setDescription(e.target.value)} type="text" name="description" required />
          </div>

          <div className="flex flex-col m-5 items-center place-items-center">
            <AmortizedFormInput setAmortizedLength={this.setAmortizedLength} amortizedLength={this.state.amortizedLength} setAmortized={this.setAmortized} amortized={this.state.amortized} />
          </div>

          <input value={this.state.formThreadId} type="text" className="hidden" id="threadId" name="threadId" />
          <input value={this.state.formISODate} type="text" className="hidden" id="isoDate" name="isoDate" />
          <input type="number" value={this.state.formPurchaseIndex} className="hidden" id="purchaseIndex" name="purchaseIndex" />
          <div className="m-10">
            <input id="submit" type="submit" value={this.props.loading ? "Submitting..." : "Submit"} disabled={this.props.loading} className={`w-[10rem] ${this.props.loading ? 'bg-budget' : ' bg-budget-dark hover:bg-budget'} px-5 py-2 text-sm rounded-full font-semibold text-white`} />
          </div>
        </form>
        <div className="m-2 lg:m-28 border-t">
          <div className="text-budget-dark text-xl font-bold p-6">Approve Pending Transactions</div>
          <div className="flex flex-col">
            {this.props.unreadPurchases.length == 0 ? 'No Current Pending Transactions' :
              this.props.unreadPurchases.map((purchase, index) => (
                <div className="flex flex-row items-center border-t-2 border-indigo-900">
                  <div className="flex flex-col w-5/6 items-start text-left">
                    <span className="text-lg font-bold">Amount: ${purchase.amount}</span>
                    <span>Description: {purchase.description}</span>
                    <span>Date: {purchase.isoDate}</span>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <button onClick={() => this.setFormInputsWithPurchase(purchase, index)} disabled={this.state.processingPurchaseIndexes.includes(index.toString())} className={`w-[6rem] m-2 ${this.state.processingPurchaseIndexes.includes(index.toString()) ? 'bg-budget' : ' bg-budget-dark hover:bg-budget'} px-5 py-2 text-sm rounded-full font-semibold text-white`}>Add</button>
                    <button onClick={() => this.deletePurchase(purchase, index)} disabled={this.state.processingPurchaseIndexes.includes(index.toString())} className={`w-[6rem] m-2 ${this.state.processingPurchaseIndexes.includes(index.toString()) ? 'bg-budget' : ' bg-budget-dark hover:bg-budget'} px-5 py-2 text-sm rounded-full font-semibold text-white`}>Delete</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <GmailConfirmModal visability={this.state.modalVisability} setVisability={this.setModalVis} setDescription={this.setDescription} currentDescription={this.state.formDescription} setAmount={this.setAmount} currentAmount={this.state.formAmount} setCategory={this.setCategory} currentCategory={this.state.formCategory} amortized={this.state.amortized} setAmortized={this.setAmortized} amortizedLength={this.state.amortizedLength} setAmortizedLength={this.setAmortizedLength} />
      </div>
    );
  };
}
