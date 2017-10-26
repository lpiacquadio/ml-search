import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './styles.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Home extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
