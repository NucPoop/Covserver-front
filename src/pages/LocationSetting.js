import '../style/LocationSetting.css';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Button from 'react-bootstrap/Button';

export default class LocationSetting extends Component {
    render() {
        return (
            <div className="location-setting">
                <h3>지역설정</h3>

                <Form>
                    <Form.Group controlId="location-state">
                        <Form.Label>도</Form.Label>
                        <br/>
                        <Form.Control className="province" as="select" custom>
                            <option>서울</option>
                            <option>부산</option>
                            <option>진주</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Form>
                    <Form.Group className="city" controlId="location-city">
                        <Form.Label>시</Form.Label>
                        <br/>
                        <Form.Control as="select" custom>
                            <option>서울</option>
                            <option>부산</option>
                            <option>진주</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Button className="setlocation-btn" controlId="setLocation">설정</Button>
            </div>
        );
    }
}