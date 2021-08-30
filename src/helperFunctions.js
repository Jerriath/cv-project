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
    console.log(newEducation.props.id);
    this.setState({education: this.state.education.concat(newEducation)});
}

export function deleteEducation(e) {
    let index = parseInt(e.target.parentNode.parentNode.id.charAt(0));
    let newArray = JSON.parse(JSON.stringify(this.state.education));
    this.setState({education: null});
    let length = newArray.length;
    newArray.splice(index);
    for (let i = index; i < length - 1; i++) {
        let nextInput = <EducationInput id={i + "edu"} key={i + "edu"} deleteEducation={this.deleteEducation} />;
        newArray.push(nextInput);
    }
    this.setState({education: newArray})
}

export function addPractical() {
    let length = this.state.practical.length;
    let newPractical = <PracticalInput id={length + "prac"} key={length + "prac"} deletePractical={this.deletePractical} />;
    this.setState({practical: this.state.practical.concat(newPractical)});
}

export function deletePractical(e) {
    let index = parseInt(e.target.parentNode.parentNode.id.charAt(0));
    let newArray = JSON.parse(JSON.stringify(this.state.practical));
    newArray.splice(index, 1);
    for (let i = index; i < newArray.length; i++) {
        newArray[i] = <PracticalInput id={i + "prac"} key={i + "prac"} deletePractical={this.deletePractical} />;
    }
    this.setState({practical: newArray})
}

export function addSkill(e) {
    let newSkill = e.target.parentNode.firstChild.children[1].value;
    e.target.parentNode.firstChild.children[1].value = "";
    this.setState({skills: this.state.skills.concat(newSkill)})
}

export function extractEduInfo(inputs) {
    let organization = inputs;
}