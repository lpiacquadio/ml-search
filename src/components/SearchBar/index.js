import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #FFE600;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 80%;
    height: 30px;
    display: flex;
    box-sizing: border-box;
`;

const Logo = styled.div`
    background-image: url(${props => props.publicUrl + 'images/Logo_ML.png'});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 50px;
    height: 30px;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    padding-left: 15px;
    margin-left: 25px;
    font-size: 0.8em;
    outline: none;
    box-sizing: border-box;
`;

const Button = styled.button`
    width: 30px;
    height: 100%;
    padding: 0px;
    border: none;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    cursor: pointer;
`;

const Icon = styled.div`
    background-image: url(${props => props.publicUrl + 'images/ic_Search.png'});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 30px;
    height: 15px;
`;

class SearchBar extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Link to="/">
            <Logo publicUrl={process.env.PUBLIC_URL}></Logo>
          </Link>
          <Form>
            <Input type="text" placeholder="Nunca dejes de buscar" />
            <Button type="submit">
              <Icon publicUrl={process.env.PUBLIC_URL}></Icon>
            </Button>
          </Form>
        </Container>
      </Wrapper>
    );
  }
}

export default SearchBar;
