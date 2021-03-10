import '../style/LocationSetting.css';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
//import Button from 'react-bootstrap/Button';

export default class LocationSetting extends Component {
    constructor() {
        super();

        // axios.post('https://www.juso.go.kr/addrlink/addrLinkApi.do',
        //     {
                
        //     },
        //     {
        //         headers:{
        //             'Content-type': 'application/json',
        //             'Accpet': 'application/json'
        //         }
        //     }
        // )
        axios.get('https://www.juso.go.kr/addrlink/addrLinkApi.do',{
            params: {
                confmKey: 'devU01TX0FVVEgyMDIxMDMwNDExNDg0MDExMDg3OTc=',
                returnUrl: document.location.href,
                keyword: "시"
            }
        })
            .then((response) => {console.log(response.data);})
            .catch((Error) => {console.log(Error)});

        // fetch('https://www.juso.go.kr/addrlink/addrLinkApi.do', {
        //     method: "get",
        //     params: {
        //         confmKey: "devU01TX0FVVEgyMDIxMDMwNDExNDg0MDExMDg3OTc=",
        //         keyword: "siNm",
        //         resultType: "json"
        //     },
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'applictation/json'
        //     }
        // })
        //     .then(response => response.json())
        //     .then(data => console.log(data));
    }

    render() {
        return (
            <div className="location-setting">
                <h3>지역 설정</h3>

                <Form>
                    <Form.Group controlId="location-state">
                        <Form.Label>도</Form.Label>
                        <br />
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
                        <br />
                        <Form.Control as="select" custom>
                            <option>서울</option>
                            <option>부산</option>
                            <option>진주</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Button className="setlocation-btn" controlId="setLocation">설정</Button>

                <div className="alarm-setting">
                    <h3>알림 설정</h3>

                    <Form>
                        <Form.Group className="alarm" controlId="set-alarm">
                            <Form.Label>이메일</Form.Label>
                            <br />
                            <Form.Control type="email" />
                        </Form.Group>
                    </Form>

                    <Button className="setalarm-btn" controlId="setAlarm">변경하기</Button>
                </div>
            </div>
        );
    }
}