import '../style/LocationSetting.css';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import LocationList from './LocationList';
//import Button from 'react-bootstrap/Button';

export default class LocationSetting extends Component {
    setTime(){
        var arr = [];

        for (let i = 10; i <= 23; i++) {
            arr.push(<option key={i} value="{i}">{i}시</option>)
        }

        return arr; 
    }

    render() {
        return (
            <div className="location-setting">
                <h3>지역 설정</h3>

                <LocationList />

                <div className="alarm-setting">
                    <h3>알림 설정</h3>

                    <Form>
                        <ToggleButtonGroup className="alarm-radio" type="radio" name="options" defaultValue={1}>
                            <ToggleButton className="alarm-radiobtn" value={1}>알림 허용</ToggleButton>
                            <ToggleButton className="alarm-radiobtn" value={0}>알림 거부</ToggleButton>
                        </ToggleButtonGroup>
                        <Form.Group controlId="timeset">
                            <Form.Label className="timeLabel">시간</Form.Label>
                            <Form.Control className="time" as="select" custom>
                                {this.setTime()}
                            </Form.Control>
                        </Form.Group>
                    </Form>

                    <Button className="setalarm-btn" type="submit" controlId="setAlarm">변경하기</Button>
                </div>
            </div>
        );
    }
}