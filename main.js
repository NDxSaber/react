import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './application/App.jsx';

//--Pages
import StepPayment from './application/page/StepPayment.jsx';
import StepFinish from './application/page/StepFinish.jsx';


ReactDOM.render(
	<Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={StepPayment}/>
      		<Route path="payment" component={StepPayment} />
      		<Route path="finish" component={StepFinish} />
        </Route>
    </Router>, 
	document.getElementById('app')
)
