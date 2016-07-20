import React from 'react';
import { Link } from 'react-router'

export default

class Header extends React.Component {
    constructor() {
        super();
    };

    render() {
        var dataWeb         = this.props.dataWeb;
        var currentStep     = this.props.currentStep;
        var fullStep        = this.props.fullStep;
        var classRadioType  = "radio-type-1";
        var className1;
        var className2;
        var className3;
        var classLineProg;

        if(currentStep == 3){
            className1      = "checked " + classRadioType;
            className2      = "checked " + classRadioType;
            className3      = "bold " + (fullStep?'checked ':'') + classRadioType;
            classLineProg   = "progress-line full animate-progress-100";
        }else if(currentStep == 2){
            className1      = "checked " + classRadioType;
            className2      = "bold " + classRadioType;
            className3      = "disabled " + classRadioType;
            classLineProg   = "progress-line half animate-progress-50";
        }else if(currentStep == 1){
            className1      = "bold " + classRadioType;
            className2      = "disabled " + classRadioType;
            className3      = "disabled " + classRadioType;
            classLineProg   = "progress-line";
        }
        
        return (
            <header id="header">
                <div className="line-tiket"></div>
                <div className="container pos-relative">
                    <img className="web-logo" src={dataWeb.logo} />
                    <div className="payment-steps">
                        <p className="icon-peace"></p>
                        <hr className="default-line"/>
                        <hr className={classLineProg}/>
                        <div className="step-option step-1">
                            <span className={className1}></span>
                            <p><Link to="/">{dataWeb.step_1_name}</Link></p>
                        </div>
                        <div className="step-option step-2">
                            <span className={className2}></span>
                            <p><Link to="/payment">{dataWeb.step_2_name}</Link></p>
                        </div>
                        <div className="step-option step-3">
                            <span className={className3}></span>
                            <p><Link to="/finish">{dataWeb.step_3_name}</Link></p>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}