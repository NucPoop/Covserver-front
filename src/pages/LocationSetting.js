import '../style/LocationSetting.css';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
//import Button from 'react-bootstrap/Button';

export default class LocationSetting extends Component {
    setTime(){
        var arr = [];

        for (let i = 0; i <= 24; i++) {
            arr.push(<option key={i} value="{i}">{i}시</option>)
        }

        return arr; 
    }

    render() {
        return (
            <div className="location-setting">
                <h3>지역 설정</h3>

                <Form>
                    <Form.Group controlId="location-state">
                        <Form.Label className="label">도</Form.Label>
                        <Form.Control className="province" as="select" custom>
                            <option>서울특별시</option>
                            <option>세종특별자치시</option>
                            <option>인천광역시</option>
                            <option>대전광역시</option>
                            <option>광주광역시</option>
                            <option>대구광역시</option>
                            <option>울산광역시</option>
                            <option>부산광역시</option>
                            <option>경기도</option>
                            <option>강원도</option>
                            <option>충청북도</option>
                            <option>충청남도</option>
                            <option>전라북도</option>
                            <option>전라남도</option>
                            <option>경상북도</option>
                            <option>경상남도</option>
                            <option>제주특별자치도</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Button className="setlocation-btn" type="submit" controlId="setLocation">설정</Button>

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