import React from 'react';
import styled from 'styled-components';
import { media, container, column, row } from './globals';

import Header from './header';
import Footer from './footer';

const Wrapper = styled.div`
    ${container()}
`;

const Row1 = styled.div`
    ${row()}
`;

const Col1 = styled.div`
    ${column(9, 'desktop')}
`;

const Col2 = styled.div`
    ${column(3, 'desktop')}
`;

export default React.createClass({
    render() {
        return (
            <Wrapper className="container">
                <Row1 className="row">
                    <Col1 className="col-md-9">
                        <Header />
                    </Col1>
                    <Col2 className="col-md-3">
                        Side Bar
                    </Col2>
                </Row1>

                { this.props.children }
                <Footer/>
            </Wrapper>
        );
    }
});
