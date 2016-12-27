import React from 'react';
import styled from 'styled-components';
import { media, container, column, row } from '../globals';

const Row1 = styled.div`
    ${row()}
`;

const Col1 = styled.div`
    ${column(9, 'desktop')}
`;

const Col2 = styled.div`
    ${column(3, 'desktop')}
`;

export default () => (
    <Row1 className="row">
        <Col1 className="col-md-9">Column 1</Col1>
        <Col2 className="col-md-3">Column 2</Col2>
    </Row1>
);
