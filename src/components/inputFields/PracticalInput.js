import React, { Component } from "react";
import InputField from "./InputField"

class PracticalInput extends Component {

    render() {
        return (
            <div className="inputComponent">
                <InputField placeHolder="Position or Occupation..." type="text" inputClass="smallInput" />
                <InputField placeHolder="Company or Organization" type="text" inputClass="smallInput" />
                <InputField inputClass="dateInput" placeHolder="From..." type="date" />
                <InputField inputClass="dateInput" placeHolder="To..." type="date" />
                <InputField inputClass="checkbox" type="checkbox" />
                <label className="subtitle">Ongoing?</label>
            </div>
        );
    };

}

export default PracticalInput;