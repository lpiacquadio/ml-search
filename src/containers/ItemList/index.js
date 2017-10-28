import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../state/actions';
import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Breadcrumb from '../../components/Breadcrumb';
import Item from '../../components/Item';
import styled from 'styled-components';

const Container = styled.div`
  background: white;
  padding: 16px;
  margin-bottom: 32px;
`

class ItemList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    var search = this.props.location.search.replace('?search=', '');
    return this.props.actions.getItems(search);
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={10} smOffset={1}>
            <Breadcrumb></Breadcrumb>          
          </Col>
          <Col xs={12} sm={10} smOffset={1}>
            <Container>
              {(this.props.items && this.props.items.results) && this.props.items.results.map((item, index) => {
                return <Item key={'item-' +index} isLast={index === this.props.items.results.length -1} data={item} />
              })}
            </Container>
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
      items: state.items,
      routing: state.routing
  }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(ItemList);
