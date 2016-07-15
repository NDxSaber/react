import React from 'react';

export default

class Review extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div id="customer-review-area" className="review-flight">
                <div className="review-order-box">
                    <div className="title">
                        Review Pemesanan
                        <div className="order-no">No. Pesanan 123456</div>
                    </div>
                    <div className="detail container-fluid">
                        <div className="row">
                            <div className="col-sm-2">
                                <h4 className="detail-title blue">Keberangkatan</h4>
                                <div className="detail-logo">
                                    <img src="<?php echo base_url();?>assets/images/logo-garuda-indonesia.png"/>
                                    <img src="<?php echo base_url();?>assets/images/logo-qatar-airways.png"/>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="flight-explanation-detail container-fluid">
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <h4 className="detail-title">Jakarta (CGK)</h4>
                                            <p>27 Jan 2017</p>
                                            <p>04.30 am</p>
                                        </div>
                                        <div className="col-xs-4">
                                        </div>
                                        <div className="col-xs-4">
                                            <h4 className="detail-title">Jakarta (CGK)</h4>
                                            <p>27 Jan 2017</p>
                                            <p>04.30 am</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <h4 className="detail-title blue">Penumpang</h4>
                                <div className="detail-bold">
                                    <ul>
                                        <li>Ny. Adele Anastasya</li>
                                        <li>Ny. Diana Rossi</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <h4 className="detail-title blue">Rincian Harga</h4>
                                <div className="detail-bold clearfix">
                                    <div className="f-left">Penerbangan</div>
                                    <div className="f-right">IDR 590.000</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2">
                                <h4 className="detail-title blue">Keberangkatan</h4>
                                <div className="detail-logo">
                                    <img src="<?php echo base_url();?>assets/images/logo-garuda-indonesia.png"/>
                                    <img src="<?php echo base_url();?>assets/images/logo-qatar-airways.png"/>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="flight-explanation-detail container-fluid">
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <h4 className="detail-title">Jakarta (CGK)</h4>
                                            <p>27 Jan 2017</p>
                                            <p>04.30 am</p>
                                        </div>
                                        <div className="col-xs-4">
                                        </div>
                                        <div className="col-xs-4">
                                            <h4 className="detail-title">Jakarta (CGK)</h4>
                                            <p>27 Jan 2017</p>
                                            <p>04.30 am</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <h4 className="detail-title blue">Penumpang</h4>
                                <div className="detail-bold">
                                    <ul>
                                        <li>Ny. Adele Anastasya</li>
                                        <li>Ny. Diana Rossi</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <h4 className="detail-title blue">Rincian Harga</h4>
                                <div className="detail-bold clearfix">
                                    <div className="f-left">Penerbangan</div>
                                    <div className="f-right">IDR 590.000</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 col-sm-offset-9">
                                <div className="detail-bold clearfix">
                                    <div className="f-left">Asuransi</div>
                                    <div className="f-right">IDR 10.000</div>
                                </div>
                                <div className="detail-bold clearfix">
                                    <div className="f-left">Biaya Pelayanan</div>
                                    <div className="f-right"><span className="review-free">GRATIS</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <h4 className="detail-title blue">Keberangkatan</h4>
                            </div>
                            <div className="grand-total-price col-sm-3 col-sm-offset-6">
                                <span>Total Harga</span>
                                <div className="clearfix">
                                    <div className="f-left">IDR</div>
                                    <div className="f-right">1.650.500</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
