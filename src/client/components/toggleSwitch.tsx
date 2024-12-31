import React from "react";

import "./toggleSwitch.css"

type ToggleSwitchProps = {
    value: boolean,
    onChange: (newValue: boolean) => void,
	disabled: boolean
}

export class ToggleSwitch extends React.Component<ToggleSwitchProps> {

	state = {
		value: false
	}

	constructor(props) {
        super(props)
	}

	public componentDidMount = () => {
        this.setState({ 
			value: this.props.value
		})
	}

	public componentDidUpdate(prevProps) {
		if (this.props.value !== prevProps.value) {
			this.setState({ value: this.props.value })
		}
	}

    onClickHandler = () => {
		if (!this.props.disabled) {
			this.props.onChange(!this.state.value)
			this.setState({ value: !this.state.value })
		}
    }

	public render() {
		return (
			<div className="toggleBox flex flex-col items-start h-6.5 w-12 rounded-full border-2 border-teal-950" onClick={() => this.onClickHandler()}>
                <div className={"togglePin h-6 w-6 rounded-full " + (this.state.value ? "togglePin-toggled bg-budget":"togglePin-untoggled bg-budget-dark") + (this.props.disabled ? " !bg-slate-500" : "")}>
                </div>
				<input className="hidden" name="archived" checked={this.state.value} type="checkbox" />
			</div>
		);
	}
}