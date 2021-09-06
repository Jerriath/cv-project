import FormComponent from "./components/inputFields/FormComponent";
import ResumeComponent from "./components/outputFields/ResumeComponent";
import EducationInput from "./components/inputFields/EducationInput";
import PracticalInput from "./components/inputFields/PracticalInput";
import styles from "./appStyles.css";
import React, { Component } from "react";
import { updateFirst, updateLast, updateEmail, updatePhone, addEducation, addPractical, deleteEducation, deletePractical, addSkill, deleteSkill, appendEdu, appendPract, extractEduInfo, extractPractInfo } from "./helperFunctions";

class App extends Component {

  constructor(props) {
    super(props);
    this.updateFirst = updateFirst.bind(this);
    this.updateLast = updateLast.bind(this);
    this.updateEmail = updateEmail.bind(this);
    this.updatePhone = updatePhone.bind(this);
    this.addEducation = addEducation.bind(this);
    this.addPractical = addPractical.bind(this);
    this.deleteEducation = deleteEducation.bind(this);
    this.deletePractical = deletePractical.bind(this);
    this.addSkill = addSkill.bind(this);
    this.deleteSkill = deleteSkill.bind(this);
    this.appendEdu = appendEdu.bind(this);
    this.appendPract = appendPract.bind(this);
    this.extractEduInfo = extractEduInfo.bind(this);
    this.extractPractInfo = extractPractInfo.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      education: [<EducationInput id="0edu" key="0edu" deleteEducation={this.deleteEducation} extractEduInfo={this.extractEduInfo} /> ],
      practical: [<PracticalInput id="0prac" key="0prac" deletePractical={this.deletePractical} />],
      skills: []
    };
  };



  render() {
    return (
      <div className="page">
        <FormComponent 
          education={this.state.education} 
          practical={this.state.practical} 
          skills={this.state.skills}
          updateFirst = {this.updateFirst}
          updateLast = {this.updateLast}
          updateEmail = {this.updateEmail}
          updatePhone = {this.updatePhone}
          addEducation = {this.addEducation}
          addPractical = {this.addPractical}
          deleteEducation = {this.deleteEducation}
          deletePractical = {this.deletePractical}
          addSkill = {this.addSkill}
          deleteSkill = {this.deleteSkill}
          appendEdu = {this.appendEdu}
          appendPract = {this.appendPract}
        />
        <ResumeComponent 
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
          education={this.state.education} 
          practical={this.state.practical} 
          skills={this.state.skills}
          extractEduInfo = {this.extractEduInfo}
          extractPractInfo = {this.extractPractInfo}
        />
      </div>
    );
  }
}

export default App;
