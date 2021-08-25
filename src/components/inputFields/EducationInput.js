import React, { Component } from "react";
import InputField from "./InputField"

class EducationInput extends Component {

    render() {
        return (
            <div className="inputComponent">
                <InputField inputClass="smallInput" type="text" labelClass="label" label="Degree / Certificate: " />
                <InputField inputClass="smallInput" type="text" labelClass="label" label="Insititute / Organization: " />
                <div className="dateSection" >
                    <InputField inputClass="dateInput" type="date" labelClass="label" label="From: " />
                    <InputField inputClass="dateInput" type="date" labelClass="label" label="To: " />
                    <div className="boolean" >
                        <InputField inputClass="checkbox" type="checkbox" />
                        <label className="boxLabel">Ongoing?</label>
                    </div>
                </div>
            </div>
        );
    };

}

export default EducationInput;