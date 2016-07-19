import React from 'react';

export default

class Review extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div id="customer-review-area" className="review-hotel">
                <div className="review-order-box">
                    <div className="title">
                        Booking Review
                        <div className="order-no">No. Pesanan 123456</div>
                    </div>
                    <div className="detail container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <img src="<?php echo base_url();?>assets/images/hotel-image.png"/>   
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h4 className="detail-title">The Ullin Vilas and Spa - by Karaniya Experience</h4>
                                        <p className="location">Bali, Indonesia</p>
                                        <div className="check-detail col-xs-4">
                                            <p>Check-in date</p>
                                            <p className="strong">Mon, 10 Mar 2017</p>
                                        </div>
                                        <div className="check-detail col-xs-4">
                                            <p>Check-out date</p>
                                            <p className="strong">Wed, 20 Mar 2017</p>
                                        </div>
                                        <div className="room-detail col-xs-4">
                                            <p className="strong">1 Room</p>
                                            <p className="strong">2 Adult</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="room-price">
                                            <h4 className="strong">Rincian Harga</h4>
                                            <div className="row">
                                                <div className="col-xs-5">
                                                    <p>Room Price</p>
                                                </div>
                                                <div className="col-xs-7">
                                                    <p className="right">USD 24</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-5">
                                                    <p>Service Charge</p>
                                                </div>
                                                <div className="col-xs-7">
                                                    <p className="right orange">FREE</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-6">
                                <div className="detail-facility">
                                <p className="title-facility">Facility</p>
                                    <div className="facility-list col-sm-4">
                                        <p><span className="payment-icon-food"></span> Breakfast</p>
                                        <p><span className="payment-icon-food"></span> 24 Service</p>
                                        <p><span className="payment-icon-food"></span> Restaurant</p>
                                        <p><span className="payment-icon-food"></span> WiFi</p>
                                        <p><span className="payment-icon-food"></span> Pool</p> 
                                    </div>
                                    <div className="facility-list col-sm-4">
                                        <p><span className="payment-icon-food"></span> Sea View</p>
                                        <p><span className="payment-icon-food"></span> Bathub</p>
                                        <p><span className="payment-icon-food"></span> Hairdryer</p>
                                        <p><span className="payment-icon-food"></span> Free Toiletries</p>
                                        <p><span className="payment-icon-food"></span> Laundry</p>
                                    </div>
                                    <div className="col-sm-4"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-9">
                                <button className="button-detail"> + More info </button>
                            </div>
                            <div className="col-sm-3">
                                <div className="row room-price">
                                    <div className="col-xs-5">
                                        <p>Payment Total</p>
                                    </div>
                                    <div className="col-xs-7">
                                        <h3 className="align-right orange">AUD 24</h3>
                                    </div>
                                </div>
                                <small>*Payment will be processed in IDR worth <strong>IDR 300.000</strong></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
