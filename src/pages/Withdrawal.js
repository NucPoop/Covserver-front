import '../style/Withdrawal.css';
import React, { Component } from "react";
import Button from 'react-bootstrap/Button'

export default class Withdrawal extends Component {
    render() {
        return (
            <form>
                <h3>회원탈퇴</h3>

                <div className="form-group">
                    <label>비밀번호</label>
                    <input type="text" className="form-control" placeholder="Enter password" />

                    <p className="check-message"> 계정을 다시 복구할 수 없습니다. 탈퇴하시겠습니까? </p>

                    <Button href="/" type="button" className="withdraw2">탈퇴하기</Button>
                </div>
            </form>
        );
    }
}