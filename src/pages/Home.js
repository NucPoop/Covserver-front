import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import '../style/Home.css';
import Covid from './components/Covid';


class Home extends Component {
    
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    render() {
        return (
            <div className="home-container">
                <Container fluid>
                    <Row>
                        <Col xs={1} className="home-menu">
                            <Nav defaultActiveKey="/" className="flex-column">
                                <Nav.Link href="/">전국</Nav.Link>
                                <Nav.Link href="/">지역</Nav.Link>
                                
                            </Nav>
                        </Col>
                        <Col xs={9} className="home-content">
                            <div className="home-time">
                                <h4>전국 Covid 19 현황판</h4>
                                <h1>{this.state.date.getFullYear()}년 {this.state.date.getMonth()+1}월 {this.state.date.getDate()}일</h1>
                            </div>

                            
                            <Covid/>
                            {/* <Table striped bordered hover size="sm" className="home-table">
                                <thead>
                                    <tr>
                                        <th>확진환자</th>
                                        <th>격리해제</th>
                                        <th>치료 중</th>
                                        <th>사망</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>70,212</td>
                                        <td>54,636</td>
                                        <td>14,391</td>
                                        <td>1,185</td>
                                    </tr>
                                    <tr>
                                        <td>+ 562</td>
                                        <td>+ 1067</td>
                                        <td>- 525</td>
                                        <td>+ 20</td>
                                    </tr>
                                </tbody>
                            </Table> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;