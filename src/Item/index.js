import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Item extends Component {
  render() {
    return (
      <Row>
          <Col xs={12}>
            <div className="Item">
              <div className="Item-image"></div>
              <div className="Item-data">
                <div className="Item-data-price">
                  $ 1.980
                </div>
                <div className="Item-data-description">
                  Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!
                </div>
              </div>
              <div className="Item-location">
                Capital Federal
              </div>
            </div>
          </Col>
        </Row>
    );
  }
}

export default Item;
