import React, { Component } from "react";
import GeneralOutput from "./GeneralOutput";
import EducationOutput from "./EducationOutput";
import PracticalOutput from "./PracticalOutput";
import SkillsOutput from "./SkillsOutput";
import styles from "./outputStyles.css";


class Resume extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="resumeComp">
                <GeneralOutput 
                    firstName={this.props.firstName}
                    lastName={this.props.lastName}
                    email={this.props.email}
                    phone={this.props.phone}
                />
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