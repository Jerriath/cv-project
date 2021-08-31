import EducationInput from "./components/inputFields/EducationInput";
import PracticalInput from "./components/inputFields/PracticalInput";

export function updateFirst(e) {
    let newFirst = e.target.value;
    this.setState({firstName: newFirst});
}

export function updateLast(e) {
    let newLast = e.target.value;
    this.setState({lastName: newLast});
}

export function updateEmail(e) {
    let newEmail = e.target.value;
    this.setState({email: newEmail});
}

export function updatePhone(e) {
    let newPhone = e.target.value;
    this.setState({phone: newPhone});
}

export function addEducation() {
    let length = this.state.education.length;
    let newEducation = <EducationInput id={length + "edu"} key={length + "edu"} deleteEducation={this.deleteEducation} />;
    this.setState({education: this.state.education.concat(newEducation)});
}

//This was the original delete function where each new component had a delete button. I switched to the new version for testing something
/*
export function deleteEducation(e) {
    let index = parseInt(e.target.parentNode.parentNode.id.charAt(0));
    let newArray = JSON.parse(JSON.stringify(this.state.education));
    let length = newArray.length;
    newArray.splice(0);
    for (let i = 0; i < length - 1; i++) {
        let nextInput = <EducationInput id={i + "edu"} key={i + "edu"} deleteEducation={this.deleteEducation} />;
        newArray.push(nextInput);
    }
    this.setState({education: newArray})
}*/

//For some reason splicing out one component would break the application so the delete function actually just deletes everything and remakes all the components again
export function deleteEducation(e) {
    let newArray = JSON.parse(JSON.stringify(this.state.education));
    let length = newArray.length;
    newArray.splice(0);
    for (let i = 0; i < length - 1; i++) {
        let nextInput = <EducationInput id={i + "edu"} key={i + "edu"} deleteEducation={this.deleteEducation} extractEduInfo={this.extractEduInfo} />;
        newArray.push(nextInput);
    }
    this.setState({education: newArray})
}

export function addPractical() {
    let length = this.state.practical.length;
    let newPractical = <PracticalInput id={length + "prac"} key={length + "prac"} deletePractical={this.deletePractical} extractPractInfo={this.extractPractInfo} />;
    this.setState({practical: this.state.practical.concat(newPractical)});
}

//Same as the deleteEducation function
export function deletePractical(e) {
    let newArray = JSON.parse(JSON.stringify(this.state.practical));
    let length = newArray.length;
    newArray.splice(0);
    for (let i = 0; i < length - 1; i++) {
        let nextInput = <PracticalInput id={i + "prac"} key={i + "prac"} deletePractical={this.deletePractical} />;
        newArray.push(nextInput);
    }
    this.setState({practical: newArray})
}

export function addSkill(e) {
    let newSkill = e.target.parentNode.firstChild.children[1].value;
    e.target.parentNode.firstChild.children[1].value = "";
    this.setState({skills: this.state.skills.concat(newSkill)})
}

export function deleteSkill(e) {
    let index = e.target.parentNode.parentNode.id;
    index = parseInt(index);
    let newArray = JSON.parse(JSON.stringify(this.state.skills));
    newArray.splice(index, 1);
    this.setState({skills: newArray});
}

export function extractEduInfo(inputs) {
    if (inputs) {
        let certificate = inputs.childNodes[0].childNodes[1].value;
        let organization = inputs.childNodes[1].childNodes[1].value;
        let from = inputs.childNodes[2].childNodes[0].childNodes[1].value;
        let to = inputs.childNodes[2].childNodes[1].childNodes[1].value;
        let ongoing = inputs.childNodes[2].childNodes[2].childNodes[0].childNodes[1].checked;
        let object = {
            certificate,
            organization,
            from,
            to,
            ongoing
        };
        console.log(object);
        return object;
    }
    else {
        return null;
    }
}

export function extractPractInfo(inputs) {
    let occupation = inputs.childNodes[0].childNodes[1].value;
    let company = inputs.childNodes[1].childNodes[1].value;
    let description = inputs.childNodes[4].value;
    let from = inputs.childNodes[5].childNodes[0].childNodes[1].value;
    let to = inputs.childNodes[5].childNodes[1].childNodes[1].value;
    let ongoing = inputs.childNodes[5].childNodes[2].childNodes[0].childNodes[1].checked;
    let object = {
        occupation,
        company,
        description,
        from,
        to,
        ongoing
    };
    console.log(object);
    return object;
}

export function appendEdu() {
    let currentState = this.state.education;
    this.setState({education: currentState});
}

export function appendPract() {
    let currentState = this.state.practical;
    this.setState({practical: currentState});
}