import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Home from './components/pages/Home';

render((
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
    </Router>
), document.getElementById('app'));
