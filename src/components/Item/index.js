import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 16px;
`;

const Image = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 4px;
    background-image: url(${props => props.publicUrl + 'images/ipod.jpg'});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

const Data = styled.div`

`;

const Price = styled.div`

`;

const Description = styled.div`

`;

const Location = styled.div`

`;

class Item extends Component {
  render() {
    return (
      <Row>
          <Col xs={12}>
            <Container>
              <Image publicUrl={process.env.PUBLIC_URL}></Image>
              <Data>
                <Price>
                  $ 1.980
                </Price>
                <Description>
                  Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!
                </Description>
              </Data>
              <Location>
                Capital Federal
              </Location>
            </Container>
          </Col>
        </Row>
    );
  }
}

export default Item;
