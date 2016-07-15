import React from 'react';

export default

class Header extends React.Component {
    constructor() {
        super();
    };

    render() {
        var dataWeb = this.props.dataWeb;
        return (
            <header id="header">
                <div className="line-tiket"></div>
                <div className="container pos-relative">
                    <img className="web-logo" src={dataWeb.logo} />
                    <div className="payment-steps">
                        <p className="icon-peace"></p>
                        <hr className="default-line"/>
                        <div className="step-option step-1">
                            <span className="radio-type-1 checked"></span>
                            <p>{dataWeb.step_1_name}</p>
                        </div>
                        <div className="step-option step-2">
                            <span className="radio-type-1 bold"></span>
                            <p>{dataWeb.step_2_name}</p>
                        </div>
                        <div className="step-option step-3">
                            <span className="radio-type-1 disabled"></span>
                            <p>{dataWeb.step_3_name}</p>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}