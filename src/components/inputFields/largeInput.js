import React, { Component } from "react";
import styles from "../../styles.css";

class SmallInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input className="largeInput" placeHolder={this.props.placeHolder}/>
        );
    };
};