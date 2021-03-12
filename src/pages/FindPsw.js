import '../style/FindPsw.css'
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

export default class FindPsw extends Component {
    render() {
        return (
            <form>
                <h3>암호 재설정</h3>

                <div className="reset-message">
                    <p> 가입한 이메일을 입력해주세요. </p>
                    <p> 새로운 비밀번호를 메일로 전송합니다. </p>
                </div>

                <div className="form-group">
                    <label>이메일</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <p className="check-message"> 해당 이메일로 가입된 계정이 없습니다. </p>

                <Button type="submit" className="sendPsw">확인</Button>

            </form>
        );
    }
}