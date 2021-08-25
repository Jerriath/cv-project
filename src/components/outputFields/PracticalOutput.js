import React, { Component } from "react";
import styles from "./outputStyles.css";

class PracticalOutput extends Component {

    render() {
        return (
            <div className="practicalBlock">
                <div className="pracLeft">
                    <h3 className="sectionSubtitle">Restaurant Server</h3>
                    <p className="sectionContent">Gyu-Kaku</p>
                    <p className="jobDescription">
                        Worked at this restaurant for approximately three months during time off from university. Was responsible for fulfilling customer requests, 
                        running food, preparing tables, cleaning, and other miscellenious tasks. Always portrayed a professional attitude to customers and managers,
                        as well as displaying an accomidating personality to improve customer as well as coworker experience.
                    </p>
                </div>
                <div className="pracRight">
                    <p className="sectionContent">Aug. 2017 - Aug. 2021</p>
                </div>
            </div>
        );
    };

}

export default PracticalOutput;