//--Plugin
import React from 'react';

//--Components
import Notifier from '../component/Notifier.jsx';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';

import Review from '../component/Review.jsx';
import PaymentMethod from '../component/PaymentMethod.jsx';

export default //--To Call Import-ed Component

class StepPayment extends React.Component {
    constructor() {
        super();

    };

    render() {
        var dataWeb = {
            //--Global
            logo                : 'assets/images/logo-tiketcom.png',
            step_1_name         : 'Pesan',
            step_2_name         : 'Bayar',
            step_3_name         : 'Selesai',
            copyright           : '©2016 PT.Global Tiket Network. All Rights Reserved.',
            //--Page Selesai
            done_title          : 'Selesai! Pembayaran anda telah berhasil.',
            how_to_pay_title    : 'Cara Bayar',
        };

        return (
            <div>
                <Notifier/>
                <Header dataWeb={dataWeb} currentStep="2" fullStep={false}/>
                <div className="container">
                    <Review/>
                    <PaymentMethod/>
                </div>
                <Footer dataWeb={dataWeb}/>
            </div>
        );
    }
}