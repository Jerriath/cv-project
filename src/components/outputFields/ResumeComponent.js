import React, { Component } from "react";
import GeneralOutput from "./GeneralOutput";
import styles from "./outputStyles.css";


class Resume extends Component {

    render() {
        return (
            <div className="resumeComp">
                <GeneralOutput />
            </div>
        );
    };

}

export default Resume;