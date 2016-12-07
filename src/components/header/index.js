import React from 'react';
import styled from 'styled-components';
import { media } from '../globals';

const Header = styled.header`
    ${media.desktop`padding: 0 20px;`}
    ${media.tablet`padding: 0 10px;`}
    ${media.phone`padding: 0 10px;`}
    width: 100%;
`;

export default () => (
    <Header>
        Header
    </Header>
);
