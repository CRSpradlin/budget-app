import React from "react";
import { Transition } from '@headlessui/react'
import { PurchaseCategory } from "../../shared/types";

type GmailConfirmModalType = {
    visability: boolean,
    setVisability: (newVis:boolean, runSubmit:boolean) => void,
    setCategory: (category: PurchaseCategory) => void,
    currentCategory: PurchaseCategory,
    setAmount: (amount: string) => void,
    currentAmount: string,
    setDescription: (description: string) => void,
    currentDescription: string
}

export default class GmailConfirmModal extends React.Component<GmailConfirmModalType> {
	
	constructor(props) {
		super(props);
	};

    state = {
        tipAmount: '0',
        originalAmount: "null",
        originalDescription: "null"
    };

    public submitModal = (e) => {
        e.preventDefault();
        this.props.setVisability(false, true);
        this.setState({
            tipAmount: '0',
            originalAmount: "null",
            originalDescription: "null"
        });
    };

    public cancelModal = () => {
        this.setState({
            tipAmount: '0',
            originalAmount: "null",
            originalDescription: "null"
        });
        this.props.setVisability(false, false);
    };

    public updateTipAmount = (tipStr: string) => {
        let originalAmount = this.state.originalAmount;
        let originalDescription = this.state.originalDescription
        if (originalAmount == "null") {
            originalAmount = this.props.currentAmount.toString();
            this.setState({ originalAmount: this.props.currentAmount.toString() });
        }
        if (this.state.originalDescription == "null") {
            originalDescription = this.props.currentDescription.toString();
            this.setState({ originalDescription: this.props.currentDescription.toString() });
        }

        this.setState({
            tipAmount: tipStr
        })
        const newTotal = parseFloat(tipStr) + parseFloat(originalAmount);

        this.props.setDescription(originalDescription + ' (Add. Tip: $' + tipStr + ')');
        this.props.setAmount(newTotal.toFixed(2).toString());
    }

    public increaseTipButton = () => {
        let tip = parseFloat(this.state.tipAmount);

        if (isNaN(tip)) {
            tip = 0.0;
        }

        this.updateTipAmount((tip + 1).toString());
    }

    public decreaseTipButton = () => {
        let tip = parseFloat(this.state.tipAmount);

        if (isNaN(tip)) {
            tip = 0.0;
        }

        this.updateTipAmount((tip - 1).toString());
    }

	public render() {
		return (
            <>
                <Transition
                    show={this.props.visability}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="flex justify-center transition-all w-full h-full text-budget-dark bg-gray-800 bg-opacity-50 items-center overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full budget-bg outline-none focus:outline-none">
                                <div className="flex flex-col items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-2xl font=semibold">Confirm Category and Additional Tip</h3>
                                    <form onSubmit={this.submitModal}>
                                        <div className="flex flex-col">
                                            <div className="m-5">
                                                <label>Category: </label>
                                                <select name="category" value={this.props.currentCategory} onChange={(e) => this.props.setCategory(PurchaseCategory[e.target.value])} required>
                                                    {Object.keys(PurchaseCategory).map((option, index) => (
                                                        <option key={index} value={option}>{option}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label>Additional Tip: </label>
                                                <input type="text" pattern="^\d*(\.\d{0,2})?$" value={this.state.tipAmount} onChange={(e) => this.updateTipAmount(e.target.value)}/>
                                                <div className="flex flex-row  mt-3 items-center justify-center">
                                                    <button type="button" onClick={this.increaseTipButton} className="rounded-lg mr-3 px-4 py-2 text-white bg-budget-dark hover:bg-budget">+</button>
                                                    <button type="button" onClick={this.decreaseTipButton} className="rounded-lg px-4 py-2 text-white bg-budget-dark hover:bg-budget">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row">
                                            <button type="submit" className={'w-[10rem] m-5 bg-budget-dark hover:bg-budget px-5 py-2 text-sm rounded-full font-semibold text-white'}>Submit</button>
                                            <button type="button" onClick={this.cancelModal} className={'w-[10rem] m-5 bg-budget-dark hover:bg-budget px-5 py-2 text-sm rounded-full font-semibold text-white'}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </>
        )
	};
}