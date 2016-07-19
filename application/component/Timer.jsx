import React from 'react';

export default

class Timer extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div className="timer center">
                <p className="title">Sisa Waktu Pembayaran Anda</p>
                <div>
                    <div className="timer-box">
                        <div className="bg-1"></div>
                        <div className="bg-2"></div>
                        <div className="current-timer">00</div>
                        <div className="current-timer-title">JAM</div>
                    </div>
                    <div className="timer-box">
                        <div className="bg-1"></div>
                        <div className="bg-2"></div>
                        <div className="current-timer">22</div>
                        <div className="current-timer-title">MENIT</div>
                    </div>
                    <div className="timer-box">
                        <div className="bg-1"></div>
                        <div className="bg-2"></div>
                        <div className="current-timer">42</div>
                        <div className="current-timer-title">DETIK</div>
                    </div>
                </div>
                <p className="subtitle">Hingga Jam 16.27 pm</p>
            </div>
        );
    }
}
