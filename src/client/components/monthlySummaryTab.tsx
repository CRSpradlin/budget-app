import React from "react";
import { ChildComponentType } from "./root";
import { Purchase, PurchaseCategory } from "../../shared/types";

export default class MonthlySummaryTab extends React.Component<ChildComponentType> {
	
	constructor(props) {
		super(props);
	};

	state = {
		purchases: [],
		categories: {},
		prevMonthTotal: -1.0
	}

	public setCategoriesAndPurchases = (resultStr: string) => {
		const result = JSON.parse(resultStr);

		this.setState({
			purchases: result.purchases,
			categories: result.categories,
			prevMonthTotal: result.prevMonthTotal
		});

		this.props.setLoading(false);
	}

	public handleFailure = (error: Error) => {
		this.props.setLoading(false);

		alert('Error Occured: ' + error.message);
	}

	public componentDidMount = () => {
		this.props.setLoading(true);
		// @ts-ignore
		google.script.run
			.withSuccessHandler(this.setCategoriesAndPurchases)
			.withFailureHandler(this.handleFailure)
			.GetCurrentMonthPurchases();
	};

	public render() {
		return (
			<div className="content-center">
				<div className="flex flex-col items-center">
					<span className="text-budget-dark font-bold text-xl p-6">This Month's Category Totals</span>
					<table className="table-fixed text-budget-dark">
						<tr>
							<th>Category</th>
							<th>Dollar Total</th>
						</tr>
						{Object.keys(PurchaseCategory).map((category, index) => (
								<tr>
									<td>{category}</td>
									<td>{this.props.loading ? 'Loading...' : '$' + (this.state.categories[category] == undefined ? 0 : parseFloat(this.state.categories[category]).toFixed(2))}</td>
								</tr>
							))
						}
						<tr>
							<td>Month Grand Total:</td>
							<td>{Object.keys(this.state.categories).length > 0 ? '$'+Object.keys(this.state.categories).reduce((prev, curr) => (parseFloat(prev) + parseFloat(this.state.categories[curr])).toFixed(2), '0') : 'Loading...'}</td>
						</tr>
						<tr>
							<td>Total Last Month (at this time):</td>
							<td>{this.state.prevMonthTotal < 0 ? 'Loading...' : '$' + this.state.prevMonthTotal.toFixed(2)}</td>
						</tr>
					</table>
					
				</div>
				<div className="m-2 lg:m-28 border-t">
					<div className="text-budget-dark text-xl font-bold p-6">This Month's Purchases</div>
					{this.state.purchases.length == 0 ? "No Submitted Transactions Yet" : 
						this.state.purchases.map((purchase: Purchase, index) => (
							<div className="flex flex-row items-center justify-center border-t-2 border-indigo-900">
								<div className="flex flex-col text-budget-dark text-center w-5/6 items-center">
									<span className="text-lg font-bold">{purchase.category?purchase.category+': ':''}${purchase.amount}</span>
									<span className="text-lg">{purchase.description}</span>
									<span className="text-sm">{purchase.isoDate}</span>
								</div>
							</div>
						))
					}
				</div>
				{/* <Modal modalTitle={'Are you sure you want to DELETE ALL RACES and start over?'} visability={ this.state.modalVisability } setVisability={ this.setModalVis } /> */}
			</div>
		);
	};
}
