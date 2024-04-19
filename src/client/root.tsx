import React from "react";

export class Root extends React.Component {

	state = {
		newA1CellValue: "",
		loading: false
	}

	constructor(props) {
		super(props);
	}

	public resetForm = () => {
		this.setState({
			newA1CellValue: ""
		});
	}

	public handleFormSuccess = () => {
		this.setState({ loading: false });
		alert('Successfully Updated Cell Value');
	}

	public handleFailure = () => {
		this.setState({ loading: false });
		alert('Failed to Update Cell Value');
	}

	public handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ loading: true });

		// @ts-ignore
		google.script.run
		.withSuccessHandler(this.handleFormSuccess)
		.withFailureHandler(this.handleFailure)
		.FormSubmit(document.getElementById('form'));

		this.resetForm();
	}

	public render() {
		return (
			<div className="h-full flex flex-row content-center">
				<form className="flex flex-col m-auto pb-40 items-center" id="form" onSubmit={this.handleSubmit}>
					<div>
						<h1 className="text-xl">Modify Cell A1</h1>
					</div>
					<div className="mt-10">
						<label>New Cell Value: </label>
						<input name="newValue" value={this.state.newA1CellValue} onChange={(e) => this.setState({ newA1CellValue: e.target.value })} type="text" required/>
					</div>
					<div className="mt-5">
						<input id="submit" type="submit" value={this.state.loading?"Submitting...":"Submit"} disabled={this.state.loading} className={`w-[10rem] ${this.state.loading ? 'bg-indigo-500' : ' bg-indigo-800 hover:bg-indigo-500'} px-5 py-2 text-sm rounded-full font-semibold text-white`}/>
					</div>
				</form>
			</div>
		);
	}
}