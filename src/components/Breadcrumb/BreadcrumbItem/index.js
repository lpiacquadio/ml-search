import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: inline-block;
`

const Detail = styled.div`
    display: inline-block;
    font-weight: ${props => props.isLast ? 'bold' : 'normal'}
`

const Arrow = styled.div`
    display: ${props => props.isLast ? 'none' : 'inline-block'}
`

class BreadcrumbItem extends Component {
    render() {
        return (
            <Container>
                <Detail isLast={this.props.isLast}>
                    <a>{this.props.children}</a>
                </Detail>
                <Arrow isLast={this.props.isLast}>
                    &nbsp; > &nbsp;
                </Arrow>
            </Container>
        );
    }
}

BreadcrumbItem.propTypes = {
    isLast: PropTypes.bool.isRequired
}

export default BreadcrumbItem;