import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #333;
`;

export default React.createClass({
    render() {
        return (
            <section className="container">
                <Container/>
                <div className="home">
                    Super Awesome Webpack Plugin Example
                </div>
            </section>
        );
    }
});
