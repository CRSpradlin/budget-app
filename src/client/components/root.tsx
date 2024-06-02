import React from "react";
import PendingTransactionsTab from "./pendingTransactionsTab";
import MonthlySummaryTab from "./monthlySummaryTab";

export type ChildComponentType = {
	loading: boolean,
	setLoading: (value: boolean) => void
}

export class Root extends React.Component {

	state = {
		activeTabName: 'pendingTransactionsTab',
		loading: false
	}

	constructor(props) {
		super(props);
	}

	componentDidMount = () => {
		this.setLoading = this.setLoading.bind(this);
	}

	setLoading = (value: boolean) => {
		this.setState({loading: value})
	} 

	setActiveTab(tabName) {
		this.setState({
			activeTabName: tabName
		});
	}

	public render() {
		return (
			<div className="h-full">
				<div className="flex flex-row items-center p-10">
					<div className="flex flex-row items-start w-1/2">
						<span className="text-budget-dark text-4xl">eBudget</span>
					</div>
					<div className="flex flex-row-reverse w-1/2">
						<span className="text-budget-light text-lg"><a className="no-underline" href="https://crspradlin.dev" target="_new">crspradlin</a></span>
					</div>
				</div>
				<div className="h-20 flex flex-row text-center justify-center">
					<ul className="flex border-b">
						<li className="-mb-px mr-1">
							<button className={`text-xl inline-block py-2 px-4 font-semibold ${this.state.activeTabName === 'pendingTransactionsTab'?'border-l border-t border-r rounded-t text-budget-dark':'text-gray-400 hover:text-budget-light'}`} disabled={this.state.loading} onClick={() => this.setActiveTab('pendingTransactionsTab')}>Pending Transactions</button>
						</li>
						<li className="mr-1">
							<button className={`text-xl inline-block py-2 px-4 font-semibold ${this.state.activeTabName === 'monthlySummaryTab'?'border-l border-t border-r rounded-t text-budget-dark':'text-gray-400 hover:text-budget-light'}`} disabled={this.state.loading} onClick={() => this.setActiveTab('monthlySummaryTab')}>Monthly Summary</button>
						</li>
					</ul>
				</div>
				<div className="h-full flex flex-col text-center">
					{ this.state.activeTabName === 'pendingTransactionsTab' ? <PendingTransactionsTab loading={this.state.loading} setLoading={this.setLoading} />  : null }
					{ this.state.activeTabName === 'monthlySummaryTab' ? <MonthlySummaryTab loading={this.state.loading} setLoading={this.setLoading} /> : null }
				</div>
			</div>
		);
	}
}