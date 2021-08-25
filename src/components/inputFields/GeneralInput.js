import React, { Component } from "react";
import InputField from "./InputField"

class GeneralInput extends Component {

    render() {
        return (
            <div className="inputComponent">
                <InputField type="text" inputClass="smallInput" labelClass="label" label="First Name: " />
                <InputField type="text" inputClass="smallInput" labelClass="label" label="Last Name: " />
                <InputField type="email" inputClass="smallInput" labelClass="label" label="Email: " />
                <InputField type="tel" inputClass="smallInput" labelClass="label" label="Phone Number: " />
            </div>
        );
    };

}

export default GeneralInput;