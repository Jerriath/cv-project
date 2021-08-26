

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