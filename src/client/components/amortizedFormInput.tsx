import React from "react";
import { Transition } from '@headlessui/react'
import { PurchaseCategory } from "../../shared/types";
import { ToggleSwitch } from "./toggleSwitch";

type AmortizedFormInputType = {
    amortized: boolean
}

export default class AmortizedFormInput extends React.Component<AmortizedFormInputType> {
	
	constructor(props) {
		super(props);
	};

    state = {
        amortized: this.props.amortized,
        amortizedLength: "1"
    };

    public handleToggleSwitch = () => {
        this.setState({
            amortized: !this.state.amortized
        })
    }

    public updateAmortizedLength = (numOfMonths: string) => {
        this.setState({
            amortizedLength: numOfMonths
        })
    }

    public increaseTipButton = () => {
        let tip = parseInt(this.state.amortizedLength);

        if (isNaN(tip)) {
            tip = 0;
        }

        this.updateAmortizedLength((tip + 1).toString());
    }

    public decreaseTipButton = () => {
        let tip = parseInt(this.state.amortizedLength);

        if (isNaN(tip)) {
            tip = 0;
        }

        this.updateAmortizedLength((tip - 1).toString());
    }

	public render() {
		return (
            <>
                <div className="flex flex-col">
                    <div className="m-5">
                        <label>Amortize?: </label>
                        <input value={JSON.stringify(this.state.amortized)} type="text" className="hidden" id="amortized" name="amortized" />
                        <ToggleSwitch disabled={false} value={this.state.amortized} onChange={() => this.handleToggleSwitch()} />
                    </div>
                    {this.state.amortized && 
                        <div>
                            <label>Number of Months to Amortize: </label>
                            <input name="amortizedLength" type="text" pattern="^\d*(\.\d{0,2})?$" value={this.state.amortizedLength} onChange={(e) => this.updateAmortizedLength(e.target.value)}/>
                            <div className="flex flex-row  mt-3 items-center justify-center">
                                <button type="button" onClick={this.increaseTipButton} className="rounded-lg mr-3 px-4 py-2 text-white bg-budget-dark hover:bg-budget">+</button>
                                <button type="button" onClick={this.decreaseTipButton} className="rounded-lg px-4 py-2 text-white bg-budget-dark hover:bg-budget">-</button>
                            </div>
                        </div>
                    }
                </div>
            </>
        )
	};
}