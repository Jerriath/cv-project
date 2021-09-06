import React, { Component } from "react";

class ReactButton extends Component {

    render() {
        return (
            <button className={this.props.className} onClick={this.props.onClick} >{this.props.textContent}</button>
        );
    };
    
}

export default ReactButton;