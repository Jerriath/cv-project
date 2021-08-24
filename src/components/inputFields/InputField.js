import React, { Component } from "react";
import styles from "./inputStyles.css";

class InputField extends Component {

    render() {
        return (
            <input className={this.props.inputClass} placeholder={this.props.placeHolder} type={this.props.type}/>
        );
    };
};

export default InputField;