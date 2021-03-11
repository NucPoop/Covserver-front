import '../style/LocationSetting.css';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
//import Button from 'react-bootstrap/Button';

export default class LocationSetting extends Component {
    // constructor() {
    //     super();

    //     // axios.get('https://www.juso.go.kr/addrlink/addrLinkApi.do', {
    //     //     params: {
    //     //         confmKey: 'devU01TX0FVVEgyMDIxMDMwNDExNDg0MDExMDg3OTc=',
    //     //         returnUrl: document.location.href,
    //     //         keyword: "시"
    //     //     }
    //     // })
    //     //     .then((response) => { console.log(response.data); })
    //     //     .catch((Error) => { console.log(Error) });

    //     // fetch('https://www.juso.go.kr/addrlink/addrLinkApi.do', {
    //     //     method: "get",
    //     //     params: {
    //     //         confmKey: "devU01TX0FVVEgyMDIxMDMwNDExNDg0MDExMDg3OTc=",
    //     //         keyword: "siNm",
    //     //         resultType: "json"
    //     //     },
    //     //     headers: {
    //     //         'Content-Type': 'application/json',
    //     //         'Accept': 'applictation/json'
    //     //     }
    //     // })
    //     //     .then(response => response.json())
    //     //     .then(data => console.log(data));
    // }

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
                                <option>0시</option>
                                <option>1시</option>
                                <option>2시</option>
                                <option>3시</option>
                                <option>4시</option>
                                <option>5시</option>
                                <option>6시</option>
                                <option>7시</option>
                                <option>8시</option>
                                <option>9시</option>
                                <option>10시</option>
                                <option>11시</option>
                                <option>12시</option>
                                <option>13시</option>
                                <option>14시</option>
                                <option>15시</option>
                                <option>16시</option>
                                <option>17시</option>
                                <option>18시</option>
                                <option>19시</option>
                                <option>20시</option>
                                <option>21시</option>
                                <option>22시</option>
                                <option>23시</option>
                                <option>24시</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>

                    <Button className="setalarm-btn" type="submit" controlId="setAlarm">변경하기</Button>
                </div>
            </div>
        );
    }
}