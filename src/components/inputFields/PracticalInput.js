import React, { Component } from "react";
import InputField from "./InputField";
import ReactButton from "./ReactButton";

class PracticalInput extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="inputComponent" id={this.props.id} key={this.props.id}>
                <InputField type="text" inputClass="smallInput" labelClass="label" label="Occupation / Position: "/>
                <InputField type="text" inputClass="smallInput" labelClass="label" label="Company / Organization: "/>
                <label className="label">Description: </label>
                <br></br>
                <textarea className="textBox" rows="5" cols="45"></textarea>
                <div className="dateSection" >
                    <InputField inputClass="dateInput" type="date" labelClass="label" label="From: " />
                    <InputField inputClass="dateInput" type="date" labelClass="label" label="To: " />
                    <div className="boolean" >
                        <InputField inputClass="checkbox" type="checkbox" />
                        <label className="boxLabel">Ongoing?</label>
                    </div>
                    <ReactButton className="deleteField" onClick={this.props.deletePractical} textContent="Delete" />
                </div>
            </div>
        );
    };

}

export default PracticalInput;