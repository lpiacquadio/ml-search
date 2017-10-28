import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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

    & > a {
      @media (max-width: 350px) {
        display: none;
      }
    }
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

    @media (max-width: 350px) {
      margin-left: 0px;
    }
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
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.history.push('/items?search=' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <Link to="/">
            <Logo publicUrl={process.env.PUBLIC_URL}></Logo>
          </Link>
          <Form onSubmit={this.handleSubmit}>
            <Input type="text" placeholder="Nunca dejes de buscar" value={this.state.value} onChange={this.handleChange} />
            <Button type="submit">
              <Icon publicUrl={process.env.PUBLIC_URL}></Icon>
            </Button>
          </Form>
        </Container>
      </Wrapper>
    );
  }
}

export default withRouter(SearchBar);
