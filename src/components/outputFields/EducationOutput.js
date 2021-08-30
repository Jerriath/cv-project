import React, { Component } from "react";
import styles from "./outputStyles.css";

class EducationOutput extends Component {

    render() {

        //Before returning, create a new array which maps the education array to a new jsx element. The return method will then return this array of elements

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