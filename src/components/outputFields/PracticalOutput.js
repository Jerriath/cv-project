import React, { Component } from "react";
import styles from "./outputStyles.css";

class PracticalOutput extends Component {

    render() {
        let inputs = (document.getElementById(this.props.item.props.id));
        console.log(inputs);
        let date = null;
        if (inputs !=null) {
            let extractPractInfo = this.props.extractPractInfo;
            inputs = extractPractInfo(inputs);
            if (inputs.ongoing) {
                date = inputs.from.toLocaleDateString("en-US") + " - present";
            }
            else {
                date = inputs.from + " - " + inputs.to;
            }
        }
        if (inputs != null) {
            return (
                <div className="practicalBlock">
                    <div className="pracLeft">
                        <h3 className="sectionSubtitle">{inputs.occupation}</h3>
                        <p className="sectionContent">{inputs.company}</p>
                        <p className="jobDescription">{inputs.description}</p>
                    </div>
                    <div className="pracRight">
                        <p className="sectionContent">{date}</p>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="practicalBlock">
                    <div className="pracLeft">
                        <h3 className="sectionSubtitle"></h3>
                        <p className="sectionContent"></p>
                        <p className="jobDescription"></p>
                    </div>
                    <div className="pracRight">
                        <p className="sectionContent"></p>
                    </div>
                </div>
            );
        }
    };
}

export default PracticalOutput;