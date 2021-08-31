import React, { Component } from "react";
import styles from "./outputStyles.css";

class SkillsOutput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="skillsBlock">
                <ul className="doubleList">
                    {this.props.skills.map( (skill) => {
                        return <li>{skill}</li>
                    })}
                </ul>
            </div>
        );
    };

}

export default SkillsOutput;