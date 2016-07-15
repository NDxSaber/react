//--Plugin
import React from 'react';
import {
    Router,
    Route,
    Link
} from 'react-router'

//--Component
import Notifier from './Notifier.jsx';
import Header from './Header.jsx';
import Review from './Review.jsx';
import PaymentMethod from './PaymentMethod.jsx';

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
            logo: 'assets/images/logo-tiketcom.png',
            step_1_name: 'Pesan',
            step_2_name: 'Bayar',
            step_3_name: 'Selesai',
        };

        return (
            <div>
                <Notifier/>
                <Header dataWeb={dataWeb}/>
                <div className="container">
                    <Review/>
                    <PaymentMethod/>
                </div>
                <table className="hide">
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}



class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}


export default App;