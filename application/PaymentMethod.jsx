import React from 'react';

export default

class PaymentMethod extends React.Component {
    constructor() {
        super();

        this.state = {
            data: {"status":"SUCCESS","response_code":"00","response":[{"master_info":"Kartu Kredit","icon":[{"img":"icon_mastercard.png","alt":"Master Card"},{"img":"icon_visa.png","alt":"Visa"}],"additional_info":"Mastercard & Visa","link":"https:\/\/ww.core.payment.co\/api\/v1\/checkout\/1","type":"creditcard","message":""},{"master_info":"BCA","icon":[{"img":"icon_bca.png","alt":"BCA"}],"additional_info":"ATM BCA, Klik BCA, m-BCA & BCA Klikpay","link":"https:\/\/ww.core.payment.co\/api\/v1\/checkout\/11","type":"bca","message":""},{"master_info":"Mandiri","icon":[{"img":"icon_mandiri.png","alt":"Mandiri"}],"additional_info":"ATM Mandiri & Mandiri Clickpay","link":"https:\/\/ww.core.payment.co\/api\/v1\/checkout\/21","type":"mandiri","message":""},{"master_info":"CIMB","icon":[{"img":"icon_cimb.png","alt":"CIMB Niaga"}],"additional_info":"ATM CIMB & CIMB Clicks","link":"https:\/\/ww.core.payment.co\/api\/v1\/checkout\/31","type":"cimb","message":""},{"master_info":"BRI","icon":[{"img":"icon_bri.png","alt":"BRI"}],"additional_info":"Epay BRI","link":"https:\/\/ww.core.payment.co\/api\/v1\/checkout\/41","type":"bri","message":""},{"master_info":"Bank Lainnya","icon":[{"img":"icon_bank_lain.png","alt":"Others Bank"}],"additional_info":"ATM Bersama & Prima","link":"https:\/\/ww.core.payment.co\/api\/v1\/checkout\/method\/99","type":"others","message":""}]},
        }
    };

    componentWillMount(){
        //--Called the first time the component is loaded right before the component is added to the page
        var ini = this;

        $.ajax({
            method: "GET",
            url: "http://ww.core.payment.co/api/v1/checkout/available-payment",
            context: this,
            success: function(response) {
                this.setState({data: response});
                console.log(this.state.data);

            }.bind(this),
            error: function(error){}.bind(this)
        });
    }

    componentDidMount(){
        //--Called after the component has been rendered into the page
    }
    componentWillReceiveProps(nextProps){
        //--Called when the props provided to the component are changed
    }
    componentWillUpdate(nextProps, nextState){
        //--Called when the props and/or state change
        this.paymentList  = this.state.data.response;
    }
    componentWillUnmount(){
        //--Called when the component is removed
    }
    

    render() {
        var paymentList = this.state.data.response;

        return (
            <div id="customer-step-area">
                <div className="step-box">
                    <div className="step-header">
                        <div>Payment Method</div>
                    </div>
                    <div className="step-content">
                        <div id="payment-choices">
                            {paymentList.map((list, key) => <PaymentOption key={key} datax={list} />)}
                            <PaymentOption/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class PaymentOption extends React.Component {
    render() {
        return (
            <div className="option">
                <div className="head clearfix">
                    <div className="title">Kartu Kredit</div>
                    <div className="payment-logo-box clearfix">
                        <div className="payment-logo mastercard"></div>
                        <div className="payment-logo visa"></div>
                    </div>
                    <div className="name">Master Card & VISA</div>
                    <span className="payment-arrow-down"></span>
                </div>
                <div className="content">
                    <div className="container-payment">
                        <div className="form-credit-card">
                            <div className="title">Payment Information</div>
                            <div className="detail clearfix">
                                <div className="text">Kini Anda dapat dengan aman menyimpan data kartu kredit Anda untuk memudahkan transaksi berikutnya.</div>
                                <div className="picture">
                                    <img src="<?php echo base_url();?>assets/images/mastercard-big.png"/>
                                    <img src="<?php echo base_url();?>assets/images/visa-big.png"/>
                                </div>
                            </div>
                            <div className="box">
                                <div className="radio-option"><span className="radio-type-3"></span> <span className="label">Pembayaran Penuh</span></div>                                                
                            </div>
                            <div className="box">
                                <label>Nomor Kartu Kredit <span>*</span></label>
                                <input type="text" name="" placeholder="" className="form-control"/>
                                <label>Nama Pemegang Kartu <span>*</span></label>
                                <input type="text" name="" placeholder="" className="form-control"/>
                                <div className="clearfix">
                                    <div className="expired-area">
                                        <label>Berlaku Hingga <span>*</span></label>
                                        <select className="form-control">
                                            <option value="">Bulan</option>
                                        </select> 
                                        / 
                                        <select className="form-control">
                                            <option value="">Bulan</option>
                                        </select>
                                    </div>
                                    <div className="cvv-area">
                                        <label>CVV/CVC <span>*</span></label>
                                        <input type="text" name="" placeholder="" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="cicilan-area">
                                <div className="title">Pilih Jenis Pembayaran Anda</div>
                                <div className="radio-option"><span className="radio-type-3"></span> <span className="label">Pembayaran Penuh</span></div>
                                <div className="radio-option"><span className="radio-type-3"></span> <span className="label">Cicilan 3 Bulan (3 x @ IDR 150.000)</span></div>
                                <div className="radio-option"><span className="radio-type-3"></span> <span className="label">Cicilan 6 Bulan (6 x @ IDR 150.000)</span></div>
                                <div className="radio-option"><span className="radio-type-3"></span> <span className="label">Cicilan 12 Bulan (12 x @ IDR 150.000)</span></div>
                            </div>
                            <hr/>
                            <div className="partner-area">
                                <div className="title">Partner untuk program cicilan kami :</div>
                                <div className="img-box">
                                    <img src="<?php echo base_url();?>assets/images/anz.png"/>
                                    <img src="<?php echo base_url();?>assets/images/cimb.png"/>
                                    <img src="<?php echo base_url();?>assets/images/hsbc.png"/>
                                    <img src="<?php echo base_url();?>assets/images/mega.png"/>
                                    <img src="<?php echo base_url();?>assets/images/permata.png"/>
                                    <img src="<?php echo base_url();?>assets/images/standardchartered.png"/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
