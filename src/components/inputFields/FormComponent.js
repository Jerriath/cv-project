import React, { Component } from "react";
import GeneralInput from "./GeneralInput";
import EducationInput from "./EducationInput";
import PracticalInput from "./PracticalInput";
import SkillsInput from "./SkillsInput";
import ReactButton from "./ReactButton";
import styles from "./inputStyles.css";

class FormComponent extends Component {

    render() {
        //I want to change the education (and practical) arrays into arrays of js objects and then map those into react components when rendering
        return (
            <div className="formComp">
                <h1 className="subtitle">General Info</h1>
                <GeneralInput 
                    updateFirst={this.props.updateFirst}
                    updateLast={this.props.updateLast}
                    updateEmail={this.props.updateEmail}
                    updatePhone={this.props.updatePhone}
                />
                <h1 className="subtitle">Education Info</h1>
                {this.props.education}
                <ReactButton className="addField" textContent="Add +" onClick={this.props.addEducation} />
                <ReactButton className="addField" textContent="Append" onClick={this.props.appendEdu} />
                <h1 className="subtitle">Practical Info</h1>
                {this.props.practical}
                <ReactButton className="addField" textContent="Add +" onClick={this.props.addPractical} />
                <ReactButton className="addField" textContent="Append" onClick={this.props.appendPract} />
                <h1 className="subtitle">Additional Skills</h1>
                <SkillsInput skills={this.props.skills} addSkill={this.props.addSkill} deleteSkill={this.props.deleteSkill} />
                <button id="print" onClick={window.print}>Print</button>
            </div>
        );
    }
    
}

export default FormComponent;
