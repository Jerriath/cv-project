import React, { Component } from "react";
import GeneralOutput from "./GeneralOutput";
import EducationOutput from "./EducationOutput";
import PracticalOutput from "./PracticalOutput";
import SkillsOutput from "./SkillsOutput";
import styles from "./outputStyles.css";


class Resume extends Component {

    render() {
        return (
            <div className="resumeComp">
                <GeneralOutput />
                <h2 className="sectionTitle">Education</h2>
                <EducationOutput />
                <hr className="line" />
                <h2 className="sectionTitle">Work Experience</h2>
                <PracticalOutput />
                <PracticalOutput />
                <hr className="line" />
                <h2 className="sectionTitle">Additional Skills</h2>
                <SkillsOutput />
            </div>
        );
    };

}

export default Resume;