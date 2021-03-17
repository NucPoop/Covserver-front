import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Row from 'react-bootstrap/Row';
import '../style/Home.css';
import Covid from './components/Covid';
import { ACCESS_TOKEN } from './Index';
import CovidLocal from './components/CovidLocal';


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            covidTable: null
        }
        this.all = React.createRef();
        this.local = React.createRef();
    }

    handleToggleButton = input => {
        if (input === 1) {
            this.setState({
                covidTable: [<Covid />]
            });
        }
        else {
            this.setState({
                covidTable: [<CovidLocal currentUser={this.props.currentUser} />]
            });
        }

    }

    componentDidMount() {
        this.handleToggleButton(1);
    }

    render() {
        let localButton;
        let isShow = false;

        if (this.props.isAuthenticated === true) {
            localButton = [<ToggleButton key={1} className="location-radiobtn" value={0} disabled={false}>지역 현황</ToggleButton>];
            isShow = true;
        } else {
            localButton = [<ToggleButton key={2} className="location-radiobtn" value={0} disabled={true}>지역 현황</ToggleButton>];
            isShow = false;
        }
        return (
            <div className="home-container">
                <Container fluid>
                    <Row>
                        <Col xs={1} className="home-menu">
                            {/* <Nav defaultActiveKey="/" className="flex-column">
                                <Nav.Link href="/">전국</Nav.Link>
                                <Nav.Link href="/">지역</Nav.Link>

                            </Nav> */}

                        </Col>
                        <Col xs={9} className="home-content">
                            <div className="home-time">
                                <h4>전국 Covid 19 현황판</h4>
                                <h1>{this.state.date.getFullYear()}년 {this.state.date.getMonth() + 1}월 {this.state.date.getDate()}일</h1>
                            </div>

                            <ToggleButtonGroup onChange={this.handleToggleButton} className="location-radio" type="radio" name="options" defaultValue={1}>
                                <ToggleButton className="location-radiobtn" value={1}>전국 현황</ToggleButton>
                                {localButton}
                            </ToggleButtonGroup>
                            
                            {this.state.covidTable}
                            {/* <Covid ref={this.all} hidden={false} />
                            {localCovid && isShow} */}

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;