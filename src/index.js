import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Wrapper from './components/Wrapper';
import Home from './components/pages/Home';

render((
    <Router history={browserHistory}>
        <Route path="/" component={Wrapper} >
            <Route path="home" component={Home} />
        </Route>
    </Router>
), document.getElementById('app')); // eslint-disable-line no-undef

