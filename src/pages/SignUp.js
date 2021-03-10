import '../style/SignUp.css';
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>회원가입</h3>

                <div className="form-group">
                    <label>이메일</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>비밀번호</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <p className="check-message"> 이미 사용 중인 이메일입니다. </p>

                <Button onClick="/" type="submit" className="sign-up">회원가입</Button>

                <p className="forgot-password text-right">
                    계정이 있으신가요? <a href={"/sign-in"}>로그인</a>
                </p>
            </form>
        );
    }
}