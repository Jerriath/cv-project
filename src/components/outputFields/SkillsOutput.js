import React, { Component } from "react";
import styles from "./outputStyles.css";

class SkillsOutput extends Component {

    render() {
        return (
            <div className="skillsBlock">
                <ul className="doubleList">
                    <li>ReactJS</li>
                    <li>JavaScript</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Critical Thinking</li>
                    <li>Data analysis</li>
                </ul>
            </div>
        );
    };

}

export default SkillsOutput;