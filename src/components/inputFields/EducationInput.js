import React, { Component } from "react";
import InputField from "./InputField"

class EducationInput extends Component {

    render() {
        return (
            <div className="inputComponent">
                <InputField inputClass="smallInput" placeHolder="Degree or Certificate..." type="text" />
                <InputField inputClass="smallInput" placeHolder="Institute or Organization..." type="text" />
                <InputField inputClass="dateInput" placeHolder="From..." type="date" />
                <InputField inputClass="dateInput" placeHolder="To..." type="date" />
                <InputField inputClass="checkbox" type="checkbox" />
                <label className="subtitle">Ongoing?</label>
            </div>
        );
    };

}

export default EducationInput;