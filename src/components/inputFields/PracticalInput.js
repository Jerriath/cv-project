import React, { Component } from "react";
import InputField from "./InputField"

class PracticalInput extends Component {

    render() {
        return (
            <div className="inputComponent">
                <InputField placeHolder="Position or Occupation..." type="text" inputClass="smallInput" />
                <InputField placeHolder="Company or Organization" type="text" inputClass="smallInput" />
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