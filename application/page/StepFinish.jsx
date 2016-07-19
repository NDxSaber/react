//--Plugin
import React from 'react';

//--Components
import Notifier from '../component/Notifier.jsx';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';

import Alert from '../component/Alert.jsx';
import Timer from '../component/Timer.jsx';
import Review from '../component/Review.jsx';

export default //--To Call Import-ed Component

class StepFinish extends React.Component {
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
                <Header dataWeb={dataWeb} currentStep="3" fullStep={false}/>
                <div className="container">
                    <div className="part-title">{dataWeb.done_title}</div>
                    <Alert type="success" message="Silahkan Periksa E-mail Anda untuk mendapatkan bukti pembayaran dan e-tiket." submessage="Untuk tujuan keamanan Anda, informasi kartu kredit Anda tidak akan disimpan di dalam sistem kami"/>
                    <Alert type="error" message="Segera lakukan pembayaran untuk mendapatkan e-tiket" submessage="Silahkan periksa email Anda."/>
                    <Timer/>
                    <Review/>
                    <div className="part-title">{dataWeb.how_to_pay_title}</div>
                </div>
                <Footer dataWeb={dataWeb}/>
            </div>
        );
        
    }
}