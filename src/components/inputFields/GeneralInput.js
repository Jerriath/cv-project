import React, { Component } from "react";
import InputField from "./InputField"

class GeneralInfo extends Component {

    render() {
        return (
            <div className="inputComponent">
                <InputField placeHolder="First Name..." type="text" inputClass="smallInput" />
                <InputField placeHolder="Last Name..." type="text" inputClass="smallInput" />
                <InputField placeHolder="Email..." type="email" inputClass="smallInput" />
                <InputField placeHolder="Phone Number..." type="tel" inputClass="smallInput" />
            </div>
        );
    };

}

export default GeneralInfo;