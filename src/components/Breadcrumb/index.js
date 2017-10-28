import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BreadcrumbItem from './BreadcrumbItem'

const Container = styled.div`
    margin: 16px 0px;
    font-size: 14px;
    font-family: sans-serif;
    color: #999999;
`

const links = ['Electrónica, Audio y Video', 'Ipod', 'Reproductores', 'Ipod touch', '32 GB']

class Breadcrumb extends Component {
    render() {
        return (
            <Container>
                {links.map((link, index) => {
                    return (
                        <BreadcrumbItem key={'breadcrubmItem-' +index} isLast={index === links.length -1}>
                            {link}
                        </BreadcrumbItem>
                    );
                })}
            </Container>
        );
    }
}

export default Breadcrumb;