import React, { Component } from "react";
import styles from "./inputStyles.css";

class InputField extends Component {

    render() {
        return (
            <div className="inputField">
                <label className={this.props.labelClass}>{this.props.label}</label>
                <input className={this.props.inputClass} type={this.props.type} pattern={this.props.pattern} onChange={this.props.onChange} />
            </div>
        );
    };
};

export default InputField;