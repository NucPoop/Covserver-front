import '../style/UserInfo.css'
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default class UserInfo extends Component {
    render() {
        return (
            <form>
                <h3>회원정보</h3>

                <div className="form-group">
                    <label>이메일</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>현재 비밀번호</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <p className="check-message"> 비밀번호가 일치하지 않습니다. </p>

                <div className="form-group">
                    <label>새 비밀번호</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <p className="check-message"> 현재 비밀번호와 같습니다. or 4자 이상, 20자 이하로 입력해주세요. </p>

                <Form>
                    <ToggleButtonGroup className="alarm-radio" type="radio" name="options" defaultValue={1}>
                        <ToggleButton className="alarm-radiobtn" value={1}>알림 허용</ToggleButton>
                        <ToggleButton className="alarm-radiobtn" value={0}>알림 거부</ToggleButton>
                    </ToggleButtonGroup>

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

                <Button type="submit" className="edit-info">수정하기</Button>

                <Button href="/withdrawal" type="button" className="withdraw">탈퇴하기</Button>

            </form>
        );
    }
}