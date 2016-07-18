//--Plugin
import React from 'react';

//--Components
import Review from '../component/Review.jsx';
import PaymentMethod from '../component/PaymentMethod.jsx';

export default //--To Call Import-ed Component

class StepPayment extends React.Component {
    constructor() {
        super();

    };

    render() {
        return (
            <div>
                <Review/>
                <PaymentMethod/>
            </div>
        );
    }
}