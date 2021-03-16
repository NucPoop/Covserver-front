import '../style/UserInfo.css'
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import LocationList from './LocationList';

export default class UserInfo extends Component {
    render() {
        return (
            <form className="userinfo-form">
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

                <LocationList />

                <Button href="/withdrawal" type="button" className="withdraw">탈퇴하기</Button>
                
            </form>
        );
    }
}