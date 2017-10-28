import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
`

const Image = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 4px;
  background-image: url(${props => props.url});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Data = styled.div`
  margin-top: 20px;
`;

const Price = styled.div`
  display: inline-block;
  font-size: 24px;
  font-family: sans-serif;
  color: #333333;
`;

const Shipping = styled.div`
  display: ${props => props.itsFree ? 'inline-block' : 'none'};
  width: 20px;
  height: 20px;
  background-image: url(${props => props.publicUrl + 'images/ic_shipping@2x.png'});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 10px;
`

const Description = styled.div`
  font-size: 18px;
  font-family: sans-serif;
  color: #333333;
  margin-top: 32px;
  width: 80%;

  @media (max-width: 700px) {
		width: 100%;
	}
`;

const Location = styled.div`
  font-size: 12px;
  font-family: sans-serif;
  color: #666666;
  margin-top: 20px;
`;

const Separator = styled.div`
  border: 2px solid #EEEEEE;
  margin: 16px 0px;
  width: 100%;
  display: ${props => props.isLast ? 'none' : 'block'}
`;

class Item extends Component {
  addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
  }

  render() {
    return (
      <Wrapper>
        <Row>
          <Col xs={12} sm={4} md={3}>
            <Image url={this.props.data.thumbnail}></Image>
          </Col>
          <Col xs={12} sm={6} md={7}>
            <Data>
              <Row>
                <Col xs={12}>
                  <Price>
                    {/* $ 1.980 */}
                    {this.addCommas('$ ' + this.props.data.price)}
                  </Price>
                  <Shipping itsFree={this.props.data.shipping.free_shipping} publicUrl={process.env.PUBLIC_URL}></Shipping>
                </Col>
                <Col xs={12}>
                  <Description>
                    { this.props.data.title }
                  </Description>
                </Col>
              </Row>
            </Data>
          </Col>
          <Col xs={12} sm={2} md={2}>
            <Location>
              { this.props.data.address.state_name }
            </Location>
          </Col>
        </Row>
        <Separator isLast={this.props.isLast}></Separator>
      </Wrapper>
    );
  }
}

Item.propTypes = {
  isLast: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
}

export default Item;
