import React, { Component } from "react";
import styles from "./outputStyles.css";

class EducationOutput extends Component {

    render() {
        let inputs = (document.getElementById(this.props.item.props.id));
        let date = null;
        if (inputs !=null) {
            let extractEduInfo = this.props.extractEduInfo;
            inputs = extractEduInfo(inputs);
            if (inputs.ongoing) {
                date = inputs.from.toLocaleDateString("en-US") + " - present";
            }
            else {
                date = inputs.from + " - " + inputs.to;
            }
        }
        if (inputs != null) {
            return (
                <div className="educationBlock">
                    <div className="eduLeft">
                        <h3 className="sectionSubtitle">{inputs.certificate}</h3>
                        <p className="sectionContent">{inputs.organization}</p>
                    </div>
                    <div className="eduRight">
                        <p className="sectionContent">{date}</p>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="educationBlock">
                    <div className="eduLeft">
                        <h3 className="sectionSubtitle"></h3>
                        <p className="sectionContent"></p>
                    </div>
                    <div className="eduRight">
                        <p className="sectionContent"></p>
                    </div>
                </div>
            );
        }
    };
}

export default EducationOutput;