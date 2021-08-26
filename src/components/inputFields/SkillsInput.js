import React, { Component } from "react";
import InputField from "./InputField"

class SkillsInput extends Component {

    render() {
        return (
            <div className="inputComponent">
                <InputField type="text" inputClass="smallInput" labelClass="label" label="Skills: " />
                <ul>
                    <li>ReactJS</li>
                    <li>JavaScript</li>
                    <li>C++</li>
                </ul>
            </div>
        );
    };

}

export default SkillsInput;