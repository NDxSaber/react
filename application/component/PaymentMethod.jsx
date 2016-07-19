import React from 'react';

export default

class PaymentMethod extends React.Component {
    constructor() {
        super();

        this.state = {
            data: {},
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
        var paymentList;
        if (typeof this.state.data.response != 'undefined'){
            var paymentList = this.state.data.response.map(function(list, key){
                return (
                    <PaymentOption key={key} data={list} />
                );
            });
        }

        // console.log(ReactDOM.findDOMNode(this.refs.red).id);

        return (
            <div id="customer-step-area" ref="red">
                <div className="step-box">
                    <div className="step-header">
                        <div>Payment Method</div>
                    </div>
                    <div className="step-content">
                        <div id="payment-choices">
                            {paymentList}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



class PaymentOption extends React.Component {
    constructor() {
        super();
        this._togglePaymentContent = this._togglePaymentContent.bind(this)
    }

    _togglePaymentContent() {
        $(this.refs['toggle-div']).slideToggle()
    }

    render() {
        var paymentListData = this.props.data;
        var iconList = paymentListData.icon.map(function(list, key){
            return (
                <PaymentIcon key={key} icon={list} />
            );
        });

        return (
            <div className="option">
                <div className="head clearfix" onClick={this._togglePaymentContent}>
                    <div className="title">{paymentListData.master_info}</div>
                    <div className="payment-logo-box clearfix">
                        {iconList}
                    </div>
                    <div className="name">{paymentListData.additional_info}</div>
                    <span className="payment-arrow-down"></span>
                </div>
                <div className="content" ref="toggle-div">
                    <div className="container-payment">
                        <div className="form-credit-card">
                            <div className="title">Payment Information</div>
                            <div className="detail clearfix">
                                <div className="text">Kini Anda dapat dengan aman menyimpan data kartu kredit Anda untuk memudahkan transaksi berikutnya.</div>
                                <div className="picture">
                                    <img src="assets/images/mastercard-big.png"/>
                                    <img src="assets/images/visa-big.png"/>
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
                                    <img src="assets/images/anz.png"/>
                                    <img src="assets/images/cimb.png"/>
                                    <img src="assets/images/hsbc.png"/>
                                    <img src="assets/images/mega.png"/>
                                    <img src="assets/images/permata.png"/>
                                    <img src="assets/images/standardchartered.png"/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}



class PaymentIcon extends React.Component {
    constructor() {
        super();

    }

    render() {
        var logoData = this.props.icon;

        return (
            <div className="payment-logo">
                <img src={'assets/images/'+logoData.img} alt={logoData.alt}/>
            </div>
        )
    }
}