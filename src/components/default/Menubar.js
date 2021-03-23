import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Component } from 'react';

class Menubar extends Component {
  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
      this.props.onLogout();
  }

  render() {
    let menuItems;
    let locationalram;
    if (this.props.isAuthenticated === true) {
      locationalram = [
        <Nav.Link as={Link} to="/location">지역 및 알림 설정</Nav.Link>
      ];
      menuItems = [
        <Form inline key={4}>
          <Link className="nav-link" to={"/"} key={0}>
            <Button variant="outline-success" onClick={this.handleMenuClick}>로그아웃</Button>
          </Link>
          <Link className="nav-link" to={"/user-info"} key={1}>
            <Button variant="outline-primary" >회원정보</Button>
          </Link>
        </Form>
      ];
    } else {
      locationalram = [];
      menuItems = [
        <Form inline key={5}>
          <Link className="nav-link" to={"/sign-in"} key={2}>
            <Button variant="outline-success" >로그인</Button>
          </Link>
          <Link className="nav-link" to={"/sign-up"} key={3}>
            <Button variant="outline-primary" >회원가입</Button>
          </Link>
        </Form>
      ];
    }

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Covid Notify</Navbar.Brand>
        <Navbar.Toggle key="nav" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">정보</Nav.Link>
            {locationalram}
          </Nav>
          {menuItems}
        </Navbar.Collapse>
      </Navbar>
    );

  }
}

export default Menubar;