import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
//import Home from '../../pages/Home';
//import Auth from '../../pages/Auth';
//import SignUp from '../../pages/SignUp';
//import FormControl from 'react-bootstrap/FormControl';
//import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Menubar() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">CovNoti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">정보</Nav.Link>
            <Nav.Link as={Link} to="/location">지역 및 알림 설정</Nav.Link>
          </Nav>
          <Form inline>
              <Link className="nav-link" to={"/sign-in"}>
                <Button variant="outline-success">로그인</Button>{' '}
              </Link>
              <Link className="nav-link" to={"/sign-up"}>
                <Button variant="outline-primary">회원가입</Button>
              </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
}