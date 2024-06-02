import React from "react";
import { ChildComponentType } from "./root";
import GmailConfirmModal from "./gmailConfirmModal";
import { PendingTransactionsTabState, Purchase, FormObjToPurchase, PurchaseCategory } from "../../shared/types";

export default class PendingTransactionsTab extends React.Component<ChildComponentType> {
	
	constructor(props) {
		super(props);
	};

	state: PendingTransactionsTabState = {
		modalVisability: false,
		unreadPurchases: [],
		formAmount: "",
		formCategory: PurchaseCategory.Uncategorized,
		formDescription: "",
		formThreadId: "",
		formISODate: new Date().toLocaleString(),
		formPurchaseIndex: -1 
	}

	public resetForm = () => {
		this.setState({
			formAmount: "",
			formDescription: "",
			formThreadId: "",
			formISODate: new Date().toLocaleString(),
			formPurchaseIndex: -1 
		})
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

	public setModalVis = (newVis: boolean, runSubmit: boolean) => {
		this.setState({ 
			modalVisability: newVis
		});

		if (runSubmit) {
			this.props.setLoading(true);

			// @ts-ignore
			google.script.run
				.withSuccessHandler(this.handleFormSuccess) //needs its own success func
				.withFailureHandler(this.handleFailure)
				.SubmitNewPurchase(document.getElementById('newPurchaseForm'));
		}

		if (newVis == false) {
			this.resetForm();
		}
	}

	public componentDidMount = () => {
		this.props.setLoading(true);
		// @ts-ignore
		google.script.run
			.withSuccessHandler(this.setUnreadPurchases)
			.withFailureHandler(this.handleFailure)
			.GetLatestUnreadPurchases();
	};

	private setUnreadPurchases = (unreadPurchases: Purchase[]) => {
		this.props.setLoading(false);
		this.setState({
			unreadPurchases: unreadPurchases
		})
	}

	public handleFormSuccess = (purchase: Purchase) => {
		this.props.setLoading(false);

		if (purchase.purchaseIndex != undefined && purchase.purchaseIndex != -1) {
			const unreadPurchases = this.state.unreadPurchases;
			unreadPurchases.splice(purchase.purchaseIndex, 1);
			this.setState({
				unreadPurchases
			})
		}
	};

	public handleFailure = (error: Error) => {
		this.props.setLoading(false);

		alert('Error Occured: ' + error.message);
	}

	public setFormInputsWithPurchase = (purchase: Purchase, index: number) => {
		this.setState({
			formAmount: purchase.amount,
			formCategory: purchase.category || PurchaseCategory.Uncategorized,
			formDescription: purchase.description,
			formThreadId: purchase.threadId,
			formISODate: purchase.isoDate,
			formPurchaseIndex: index
		});
		this.handleSubmit(null);
	}

	public deletePurchase = (purchase: Purchase, index: number) => {
		this.props.setLoading(true);

		purchase.purchaseIndex = index;

		// @ts-ignore
		google.script.run
		.withSuccessHandler(this.handleFormSuccess)
		.withFailureHandler(this.handleFailure)
		.MarkPurchaseAsRead(purchase);
	}

	public handleSubmit = (e) => {
		if (e) {
			e.preventDefault();
			this.props.setLoading(true);

			// @ts-ignore
			google.script.run
			.withSuccessHandler(this.handleFormSuccess)
			.withFailureHandler(this.handleFailure)
			.SubmitNewPurchase(document.getElementById('newPurchaseForm'));

			this.resetForm();
		} else {
			this.setModalVis(true, false);
		}
	}

	public render() {
		return (
			<div className="content-center">
				<div className="text-budget-dark text-xl font-bold p-6">Submit New Transaction</div>
				<form id="newPurchaseForm" onSubmit={this.handleSubmit}>
					<div className="m-5">
						<label>Transaction Amount: </label>
						<input value={this.state.formAmount} onChange={(e) => this.setAmount(e.target.value)} type="text" pattern="^\d*(\.\d{0,2})?$" name="amount" required/>
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
						<input value={this.state.formDescription} onChange={(e) => this.setDescription(e.target.value)} type="text" name="description" required/>
					</div>
					<input value={this.state.formThreadId} type="text" className="hidden" id="threadId" name="threadId" />
					<input value={this.state.formISODate} type="text" className="hidden" id="isoDate" name="isoDate" />
					<input type="number" value={this.state.formPurchaseIndex} className="hidden" id="purchaseIndex" name="purchaseIndex" />
					<div className="m-10">
						<input id="submit" type="submit" value={this.props.loading?"Submitting...":"Submit"} disabled={this.props.loading} className={`w-[10rem] ${this.props.loading ? 'bg-budget' : ' bg-budget-dark hover:bg-budget'} px-5 py-2 text-sm rounded-full font-semibold text-white`}/>
					</div>
				</form>
				<div className="m-2 lg:m-28 border-t">
					<div className="text-budget-dark text-xl font-bold p-6">Approve Pending Transactions</div>
					<div className="flex flex-col">
						{this.state.unreadPurchases.length == 0 ? 'No Current Pending Transactions' : 
							this.state.unreadPurchases.map((purchase, index) => (
								<div className="flex flex-row items-center border-t-2 border-indigo-900">
									<div className="flex flex-col w-5/6 items-start text-left">
										<span className="text-lg font-bold">Amount: ${purchase.amount}</span>
										<span>Description: {purchase.description}</span>
										<span>Date: {purchase.isoDate}</span>
									</div>
									<div className="flex flex-col md:flex-row">
										<button onClick={() => this.setFormInputsWithPurchase(purchase, index)} disabled={this.props.loading} className={`w-[6rem] m-2 ${this.props.loading ? 'bg-budget' : ' bg-budget-dark hover:bg-budget'} px-5 py-2 text-sm rounded-full font-semibold text-white`}>Add</button>
										<button onClick={() => this.deletePurchase(purchase, index)} disabled={this.props.loading} className={`w-[6rem] m-2 ${this.props.loading ? 'bg-budget' : ' bg-budget-dark hover:bg-budget'} px-5 py-2 text-sm rounded-full font-semibold text-white`}>Delete</button>
									</div>
								</div>
							))
						}
					</div>
				</div>
				<GmailConfirmModal visability={ this.state.modalVisability } setVisability={ this.setModalVis } setDescription={this.setDescription} currentDescription={this.state.formDescription} setAmount={this.setAmount} currentAmount={this.state.formAmount} setCategory={this.setCategory} currentCategory={this.state.formCategory}/>
			</div>
		);
	};
}