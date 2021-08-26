import React, { Component } from "react";
import InputField from "./InputField"

class GeneralInput extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="inputComponent">
                <InputField type="text" inputClass="smallInput" labelClass="label" label="First Name: " onChange={this.props.updateFirst} />
                <InputField type="text" inputClass="smallInput" labelClass="label" label="Last Name: " onChange={this.props.updateLast} />
                <InputField type="email" inputClass="smallInput" labelClass="label" label="Email: " onChange={this.props.updateEmail} />
                <InputField type="tel" inputClass="smallInput" labelClass="label" label="Phone Number: " onChange={this.props.updatePhone} />
            </div>
        );
    };

}

export default GeneralInput;