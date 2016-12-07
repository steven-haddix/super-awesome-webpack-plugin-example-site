import React from 'react';

import Header from './header';
import Footer from './footer';

export default React.createClass({
    render() {
        return (
            <div className="wrapper">
                <Header/>
                { this.props.children }
                <Footer/>
            </div>
        );
    }
});
