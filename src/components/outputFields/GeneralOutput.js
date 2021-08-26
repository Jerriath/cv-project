import React, { Component } from "react";
import styles from "./outputStyles.css";

class GeneralOutput extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="header">
                <h2 className="userName">{this.props.firstName} {this.props.lastName}</h2>
                <div className="userInfo">
                    <h3>{this.props.email}</h3>
                    <h3>&#8226;</h3>
                    <h3>{this.props.phone}</h3>
                </div>
                <hr className="line" />
            </div>
        );
    };

}

export default GeneralOutput;