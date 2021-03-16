import '../style/LocationList.css'
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class LocationList extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <form className="location-list">
                <Form>
                    <Form.Group controlId="location-state">
                        <Form.Label className="label">도</Form.Label>
                        <Form.Control className="province" as="select" custom>
                            <option>서울</option>
                            <option>부산</option>
                            <option>대구</option>
                            <option>인천</option>
                            <option>광주</option>
                            <option>대전</option>
                            <option>울산</option>
                            <option>세종</option>
                            <option>경기</option>
                            <option>강원</option>
                            <option>충북</option>
                            <option>충남</option>
                            <option>전북</option>
                            <option>전남</option>
                            <option>경북</option>
                            <option>경남</option>
                            <option>제주</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Button type="submit" className="edit-info" value={this.props.btnValue}></Button>
            </form>
        );
    }
}