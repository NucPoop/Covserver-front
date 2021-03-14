import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { ACCESS_TOKEN } from '../../pages/Index';

export default function Menubar() {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">CovNoti</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">정보</Nav.Link>
          <Nav.Link as={Link} to="/location">지역 및 알림 설정</Nav.Link>
          {/* <Nav.Link as={Link} to="/location" hidden={true}>지역 및 알림 설정</Nav.Link> */}
        </Nav>
        <Form inline>
          <Link className="nav-link" to={"/sign-in"}>
            <Button variant="outline-success" >로그인</Button>{' '}
          </Link>
          <Link className="nav-link" to={"/sign-up"}>
            <Button variant="outline-primary" >회원가입</Button>
          </Link>
          <Link className="nav-link" to={"/"} onClick={logout}>
            {/* <Link className="nav-link" to={"/log-out"} hidden={true}> */}
            <Button variant="outline-success">로그아웃</Button>{' '}
          </Link>
          <Link className="nav-link" to={"/user-info"}>
            {/* <Link className="nav-link" to={"/user-info"} hidden={true}> */}
            <Button variant="outline-primary" >회원정보</Button>
          </Link>

        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

function logout() {
  console.log("logoutComplete");
  localStorage.removeItem(ACCESS_TOKEN);
}
