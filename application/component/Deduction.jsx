import React from 'react';
import { Link } from 'react-router'

export default

class Deduction extends React.Component {
    constructor() {
        super();
    }

    render() {
        var title       = this.props.title_discount;
        var list        = this.props.list;

        return (
            <div>
                <hr/>
                <div className="deduction-box">
                    <h3>Ingin Potongan Harga?</h3>
                    <div className="option-box">
                        <div className="option">
                            <a href="">
                                <div className="logo payment-tiket-logo"></div>
                                <p>Gunakan <br/>TIX Point</p>
                            </a>
                        </div>
                        <div className="option">
                            <a href="">
                                <div className="logo payment-giftcard"></div>
                                <p>Gunakan <br/>Kode Kupon</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="agreement-box">
                    <label>
                        <span className="checkbox-type-1"><span className="check"></span></span>
                        Saya setuju dengan <a href="">Syarat & Ketentuan</a> dan <a href="">Kebijakan Privasi</a> yang berlaku.
                    </label>
                </div>
                <div className="center"><button className="button-save-1">Selesaikan Pemesanan</button></div>
            </div>
        )
    }
}