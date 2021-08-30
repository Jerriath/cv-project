import React, { Component } from "react";
import InputField from "./InputField"
import ReactButton from "./ReactButton";

class EducationInput extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="inputComponent" id={this.props.id} key={this.props.id}>
                <InputField inputClass="smallInput" type="text" labelClass="label" label="Degree / Certificate: " />
                <InputField inputClass="smallInput" type="text" labelClass="label" label="Insititute / Organization: " />
                <div className="dateSection" >
                    <InputField inputClass="dateInput" type="date" labelClass="label" label="From: " />
                    <InputField inputClass="dateInput" type="date" labelClass="label" label="To: " />
                    <div className="boolean" >
                        <InputField inputClass="checkbox" type="checkbox" />
                        <label className="boxLabel">Ongoing?</label>
                    </div>
                    <ReactButton className="deleteField" onClick={this.props.deleteEducation} textContent="Delete" />
                </div>
            </div>
        );
    };

}

export default EducationInput;