import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './styles.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Item from '../Item';

class ItemList extends Component {
  render() {
    let items = [{}, {}, {}, {}, {}]
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
        </Row>
        {items.map((item) => {
          return <Item />
        })}
      </Grid>
    );
  }
}

export default ItemList;
