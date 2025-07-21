import React from "react";
import { ToggleSwitch } from "./toggleSwitch";

type AmortizedFormInputType = {
  amortized: boolean
  amortizedLength: string
  setAmortized: (boolean) => void
  setAmortizedLength: (string) => void
}

export default class AmortizedFormInput extends React.Component<AmortizedFormInputType> {

  constructor(props) {
    super(props);
  };

  public handleToggleSwitch = () => {
    this.props.setAmortized(!this.props.amortized);
  }

  public updateAmortizedLength = (numOfMonths: string) => {
    this.props.setAmortizedLength(numOfMonths);
  }

  public increaseMonthsButton = () => {
    let months = parseInt(this.props.amortizedLength);

    if (isNaN(months)) {
      months = 0;
    }

    this.updateAmortizedLength((months + 1).toString());
  }

  public decreaseMonthsButton = () => {
    let months = parseInt(this.props.amortizedLength);

    if (isNaN(months)) {
      months = 0;
    }

    this.updateAmortizedLength((months - 1).toString());
  }

  public render() {
    return (
      <>
        <div className="flex flex-row m-2 items-center place-items-center">
          <label className="mr-2">Amortize?: </label>
          <input value={JSON.stringify(this.props.amortized)} type="text" className="hidden" id="amortized" name="amortized" />
          <ToggleSwitch disabled={false} value={this.props.amortized} onChange={() => this.props.setAmortized(!this.props.amortized)} />
        </div>
        {this.props.amortized &&
          <div>
            <label>Number of Months to Amortize: </label>
            <input name="amortizedLength" type="text" pattern="^\d*(\.\d{0,2})?$" value={this.props.amortizedLength} onChange={(e) => this.updateAmortizedLength(e.target.value)} />
            <div className="flex flex-row  mt-3 items-center justify-center">
              <button type="button" onClick={this.decreaseMonthsButton} className="rounded-lg mr-3 px-4 py-2 text-white bg-budget-dark hover:bg-budget">-</button>
              <button type="button" onClick={this.increaseMonthsButton} className="rounded-lg px-4 py-2 text-white bg-budget-dark hover:bg-budget">+</button>
            </div>
          </div>
        }
      </>
    )
  };
}
