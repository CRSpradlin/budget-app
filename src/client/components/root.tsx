import React from "react";
import PendingTransactionsTab from "./pendingTransactionsTab";
import MonthlySummaryTab from "./monthlySummaryTab";
import { Purchase, RootStateType } from "../../shared/types";

export class Root extends React.Component {

  state: RootStateType = {
    activeTabName: 'pendingTransactionsTab',
    loading: false,
    purchases: [],
    categories: {},
    prevMonthTotal: -1,
    unreadPurchases: []
  }

  constructor(props) {
    super(props);
  }

  public componentDidMount = () => {
    this.setLoading = this.setLoading.bind(this);
    this.reloadData();
  };

  public reloadData = () => {
    this.setLoading(true);
    // @ts-ignore
    google.script.run
      .withSuccessHandler(this.handleSuccess)
      .withFailureHandler(this.handleFailure)
      .ReloadData();
  }

  public handleSuccess = (resultStr: string) => {
    const result = JSON.parse(resultStr);

    this.setState({
      purchases: result.purchases,
      categories: result.categories,
      prevMonthTotal: result.prevMonthTotal,
      unreadPurchases: result.unreadPurchases
    });

    this.setLoading(false);
  }

  setLoading = (value: boolean) => {
    this.setState({ loading: value })
  }

  setActiveTab(tabName) {
    this.setState({
      activeTabName: tabName
    });
  }

  updateUnreadPurchases = (unreadPurchases: Purchase[]) => {
    this.setState({
      unreadPurchases
    });
  }

  public handleFailure = (error: Error) => {
    this.setLoading(false);

    alert('Error Occured: ' + error.message);
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
              <button className={`text-xl inline-block py-2 px-4 font-semibold ${this.state.activeTabName === 'pendingTransactionsTab' ? 'border-l border-t border-r rounded-t text-budget-dark' : 'text-gray-400 hover:text-budget-light'}`} disabled={this.state.loading} onClick={() => this.setActiveTab('pendingTransactionsTab')}>Pending Transactions</button>
            </li>
            <li className="mr-1">
              <button className={`text-xl inline-block py-2 px-4 font-semibold ${this.state.activeTabName === 'monthlySummaryTab' ? 'border-l border-t border-r rounded-t text-budget-dark' : 'text-gray-400 hover:text-budget-light'}`} disabled={this.state.loading} onClick={() => this.setActiveTab('monthlySummaryTab')}>Monthly Summary</button>
            </li>
          </ul>
        </div>
        <div className="h-full flex flex-col text-center">
          <div style={{ display: this.state.activeTabName === 'pendingTransactionsTab' ? 'block' : 'none' }}>
            <PendingTransactionsTab reloadData={this.reloadData} loading={this.state.loading} setLoading={this.setLoading} unreadPurchases={this.state.unreadPurchases} updateUnreadPurchases={this.updateUnreadPurchases} />
          </div>
          <div style={{ display: this.state.activeTabName === 'monthlySummaryTab' ? 'block' : 'none' }} >
            <MonthlySummaryTab reloadData={this.reloadData} loading={this.state.loading} purchases={this.state.purchases} categories={this.state.categories} prevMonthTotal={this.state.prevMonthTotal} />
          </div>
        </div>
      </div>
    );
  }
}
