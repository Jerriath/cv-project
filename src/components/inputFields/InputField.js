import React, { Component } from "react";
import styles from "./inputStyles.css";

class InputField extends Component {

    render() {
        return (
            <div className="inputField">
                <label className={this.props.labelClass}>{this.props.label}</label>
                <input className={this.props.inputClass} type={this.props.type}/>
            </div>
        );
    };
};

export default InputField;