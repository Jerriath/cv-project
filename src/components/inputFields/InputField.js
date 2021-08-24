import React, { Component } from "react";
import styles from "./inputStyles.css";

class SmallInput extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <input className={this.props.inputClass} placeholder={this.props.placeHolder} type={this.props.type}/>
        );
    };
};

export default SmallInput;