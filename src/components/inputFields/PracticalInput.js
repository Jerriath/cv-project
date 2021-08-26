import React, { Component } from "react";
import InputField from "./InputField"

class PracticalInput extends Component {

    render() {
        return (
            <div className="inputComponent">
                <InputField type="text" inputClass="smallInput" labelClass="label" label="Occupation / Position: "/>
                <InputField type="text" inputClass="smallInput" labelClass="label" label="Company / Organization: "/>
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

export default PracticalInput;