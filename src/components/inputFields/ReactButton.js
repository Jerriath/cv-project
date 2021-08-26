import React, { Component } from "react";

class ReactButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="addField">{this.props.textContent}</button>
        );
    };
    
}

export default ReactButton;