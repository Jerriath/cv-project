import React, { Component } from "react";
import { extractEduInfo } from "../../helperFunctions";
import styles from "./outputStyles.css";

class EducationOutput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let inputs = (document.getElementById(this.props.item.props.id));
        if (inputs === null || inputs != null) {
            return <div></div>;
        }
        inputs = extractEduInfo(inputs);
        console.log(inputs);
        return (
            <div className="educationBlock">
                <div className="eduLeft">
                    <h3 className="sectionSubtitle">Bachelor's in Computer Science</h3>
                    <p className="sectionContent">University of Florida</p>
                </div>
                <div className="eduRight">
                    <p className="sectionContent">Aug. 2017 - Aug. 2021</p>
                </div>
            </div>
        );
    };

}

export default EducationOutput;