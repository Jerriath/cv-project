import FormComponent from "./components/inputFields/FormComponent";
import ResumeComponent from "./components/outputFields/ResumeComponent";
import styles from "./appStyles.css";
import React, { Component } from "react";
import { updateFirst, updateLast, updateEmail, updatePhone } from "./updateFunctions";
import { render } from "@testing-library/react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      education: [],
      practical: [],
      skills: []
    };
    this.updateFirst = updateFirst.bind(this);
    this.updateLast = updateLast.bind(this);
    this.updateEmail = updateEmail.bind(this);
    this.updatePhone = updatePhone.bind(this);
  };

  


  render() {
    console.log(this.state.firstName);
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
        />
        <ResumeComponent 
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
          education={this.state.education} 
          practical={this.state.practical} 
          skills={this.state.skills}
        />
      </div>
    );
  }
}

export default App;
