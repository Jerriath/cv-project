import React, { Component } from "react";
import GeneralInput from "./GeneralInput";
import EducationInput from "./EducationInput";
import PracticalInput from "./PracticalInput";
import SkillsInput from "./SkillsInput";
import AddButton from "./AddButton";
import styles from "./inputStyles.css";

class FormComponent extends Component {


    render() {
        return (
            <div className="formComp">
                <h1 className="subtitle">General Info</h1>
                <GeneralInput />
                <h1 className="subtitle">Education Info</h1>
                <EducationInput />
                <AddButton />
                <h1 className="subtitle">Practical Info</h1>
                <PracticalInput />
                <AddButton />
                <h1 className="subtitle">Additional Skills</h1>
                <SkillsInput />
                <AddButton />
            </div>
        );
    }
    
}

export default FormComponent;
