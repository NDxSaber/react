import React from 'react';
import ReactDOM from 'react-dom';

export default

class FormData extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div className="step-box">
                <div className="step-header">
                    <div>Booking Data</div>
                </div>
                <div className="step-already clearfix">
                    <div className="col-md-4">
                        <h3>Already have Tiket.com account ?</h3>
                        <small>Please login to make your check out process faster.</small>
                    </div>
                    <div className="col-md-8">
                        <div className="space-button">
                            <button className="button-login">Login</button>
                        </div>
                        <div className="space-button">
                            <button className="button-facebook">Login with Facebook</button>
                        </div>
                        <div className="space-button">
                            <button className="button-google">Login with Google</button>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <div className="contact-form-title">
                        <h3>Or Continue as guest</h3>
                    </div>
                    <div className="contact-form-sub">
                        <h4>Contact Person Information</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <select className="select2">
                              <option>Title</option>
                              <option>Ketchup</option>
                              <option>Relish</option>
                            </select>
                        </div>
                        <div className="col-md-5">
                            <form role="form">
                                <div className="form-group float-label-control">
                                    <label for="">Full Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5">
                            <form role="form">
                                <div className="form-group float-label-control">
                                    <label for="">Email</label>
                                    <input type="email" className="form-control"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="row bottom">
                                <div className="col-sm-4">
                                    <select className="js-example-templating">
                                        
                                    </select>
                                </div>
                                <div className="col-sm-8">
                                    <div className="form-group float-label-control number">
                                        <label for="">Phone Number</label>
                                        <input type="text" className="border form-control"/>
                                    </div>
                                </div>
                            </div>
                            <small>Phone number format must begin with your country code. Example : +6221030293</small>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group float-label-control">
                                <label for="">Country Origin</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 p-top-10">
                            <label>
                                <span className="checkbox-type-1 box-choice"><span className=""></span></span>
                                <input type="checkbox" name="stay" className="checkbox-stay hide"/>
                                I am not staying at the hotel. I am making this booking for someone else.
                            </label>
                        </div>
                    </div>
                    <div className="choice">
                        <div className="row">
                            <div className="col-md-2">
                                <select className="select2">
                                    <option>Title</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                            </div>
                            <div className="col-md-5">
                                <div className="form-group float-label-control">
                                    <label for="">Full Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-5"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>
                                <span className="checkbox-type-1"><span className="check"></span></span>
                                <input type="checkbox" name="request" className="checkbox-request hide"/>
                                I have special request(Optional)
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea className="form-control" rows="5" id="comment" placeholder="Tulis permintaan anda disini"></textarea>
                            </div>  
                        </div>
                    </div>
                    <div className="center">
                        <button className="button-save-1">Booking Now</button>
                    </div>
                </div>
            </div>
        );
    }
}
