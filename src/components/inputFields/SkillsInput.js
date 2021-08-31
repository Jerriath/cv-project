import React, { Component } from "react";
import InputField from "./InputField"
import ReactButton from "./ReactButton";

class SkillsInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="inputComponent">
                <div className="dateSection" >
                    <InputField type="text" inputClass="smallInput" labelClass="label" label="Skills: " />
                    <ReactButton className="addSkill" textContent="Add +" onClick={this.props.addSkill} />
                </div>
                <ul>
                    {this.props.skills.map( (skill, i) => {
                        return <li key={i} id={i}>
                                <div className="listContents">
                                    <p className="listItem">{skill}</p>
                                    <ReactButton className="deleteSkill" textContent="Delete" onClick={this.props.deleteSkill} />
                                </div>
                            </li>
                    })}
                </ul>
            </div>
        );
    };

}

export default SkillsInput;