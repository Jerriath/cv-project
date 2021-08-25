import React, { Component } from "react";
import GeneralOutput from "./GeneralOutput";
import EducationOutput from "./EducationOutput";
import PracticalOutput from "./PracticalOutput";
import styles from "./outputStyles.css";


class Resume extends Component {

    render() {
        return (
            <div className="resumeComp">
                <GeneralOutput />
                <h2 className="sectionTitle">Education</h2>
                <EducationOutput />
                <hr className="line" />
                <PracticalOutput />
            </div>
        );
    };

}

export default Resume;