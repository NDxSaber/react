//--Plugin
import React from 'react';

//--Parts
import Notifier from './parts/Notifier.jsx';
import Header from './parts/Header.jsx';
import Footer from './parts/Footer.jsx';

export default //--To Call Import-ed Component

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [{
                    "id": 1,
                    "name": "Foo",
                    "age": "20"
                },
                {
                    "id": 2,
                    "name": "Bar",
                    "age": "30"
                },
                {
                    "id": 3,
                    "name": "Baz",
                    "age": "40"
                }
            ]
        }
    };

    render() {
        var dataWeb = {
            logo            : 'assets/images/logo-tiketcom.png',
            step_1_name     : 'Pesan',
            step_2_name     : 'Bayar',
            step_3_name     : 'Selesai',
            copyright       : '©2016 PT.Global Tiket Network. All Rights Reserved.',
        };

        return (
            <div>
                <Notifier/>
                <Header dataWeb={dataWeb}/>
                <div className="container">
                    { this.props.children }
                    <Footer dataWeb={dataWeb}/>
                </div>
            </div>
        );
    }
}

export default App;