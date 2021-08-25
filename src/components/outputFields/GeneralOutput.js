import React, { Component } from "react";
import styles from "./outputStyles.css";

class GeneralOutput extends Component {

    render() {
        return (
            <div className="header">
                <h2 className="userName">user Name</h2>
                <div className="userInfo">
                    <h3>example@gmail.com</h3>
                    <h3>&#8226;</h3>
                    <h3>(407)123-4567</h3>
                </div>
                <hr className="line" />
            </div>
        );
    };

}

export default GeneralOutput;