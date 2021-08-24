import React, { Component } from "react";
import styles from "../../styles.css";

class SmallInput extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <input className="smallInput" placeholder={this.props.placeHolder} type={this.props.type}/>
        );
    };
};

export default SmallInput;