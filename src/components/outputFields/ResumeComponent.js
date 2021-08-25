import React, { Component } from "react";
import GeneralOutput from "./GeneralOutput";
import EducationOutput from "./EducationOutput";
import styles from "./outputStyles.css";


class Resume extends Component {

    render() {
        return (
            <div className="resumeComp">
                <GeneralOutput />
                <EducationOutput />
            </div>
        );
    };

}

export default Resume;