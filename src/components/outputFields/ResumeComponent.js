import React, { Component } from "react";
import GeneralOutput from "./GeneralOutput";
import EducationOutput from "./EducationOutput";
import PracticalOutput from "./PracticalOutput";
import SkillsOutput from "./SkillsOutput";
import styles from "./outputStyles.css";


class Resume extends Component {

    render() {
        return (
            <div id="resume" className="resumeComp">
                <GeneralOutput 
                    firstName={this.props.firstName}
                    lastName={this.props.lastName}
                    email={this.props.email}
                    phone={this.props.phone}
                />
                <h2 className="sectionTitle">Education</h2>
                {this.props.education.map( (item, index ) => {
                    return <EducationOutput key={index + "EduOut"} item={item} extractEduInfo={this.props.extractEduInfo} />
                })}
                <hr className="line" />
                <h2 className="sectionTitle">Work Experience</h2>
                {this.props.practical.map( (item, index) => {
                    return <PracticalOutput key={index + "PracOut"} item={item} extractPractInfo={this.props.extractPractInfo} />
                })}
                <hr className="line" />
                <h2 className="sectionTitle">Additional Skills</h2>
                <SkillsOutput skills={this.props.skills} />
            </div>
        );
    };

}

export default Resume;