import React, { Component } from "react";
import SmallInput from "./SmallInput"

class GeneralInfo extends Component {

    render() {
        return (
            <div className="generalField">
                <h1 className="subtitle">General Information</h1>
                <SmallInput placeHolder="First Name..." type="text" />
                <SmallInput placeHolder="Last Name..." type="text" />
                <SmallInput placeHolder="Email..." type="email" />
                <SmallInput placeHolder="Phone Number..." type="tel" />
            </div>
        );
    };

}

export default GeneralInfo;