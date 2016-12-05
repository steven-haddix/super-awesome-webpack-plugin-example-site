import React from 'react';

import Header from './header';

export default React.createClass({
    render() {
        return (
            <div className="wrapper">
                <Header/>
                { this.props.children }
            </div>
        );
    }
});
