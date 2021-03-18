import '../style/FindPsw.css'
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { checkEmailAvailability, resetPassword } from './components/UserAPIs'

export default class FindPsw extends Component {

    constructor(props) {
        super(props);
        this.FindEmail = this.FindEmail.bind(this);
        this.SendNewPassword = this.SendNewPassword.bind(this);
        this.checkEmail = React.createRef();
        this.submitBtn = React.createRef();
    }

    state = {
        email: {
            value: ''
        }
    }

    FindEmail(event) {
        event.preventDefault();

        checkEmailAvailability(this.state.email.value)
            .then(response => {
                if (response.canEmailSignUp == true) {
                    //가입된 이메일 없음
                    this.checkEmail.current.hidden = false;
                    this.checkEmail.current.innerHTML = "해당 이메일로 가입된 계정이 없습니다.";
                    this.submitBtn.current.disabled = true;
                } else {
                    this.checkEmail.current.hidden = true;
                    this.submitBtn.current.disabled = false;
                }
            }).catch(error => {
                alert("조회 실패");
            });

    }

    handleChangeEmail = input => {
        this.setState({
            email: {
                value: input.target.value
            }
        });
    }

    SendNewPassword(event) {
        event.preventDefault();

        const emailRequest = {
            email: this.state.email.value
        };

        resetPassword(emailRequest)
            .then(response => {
                alert("새로운 비밀번호를 메일로 전송하였습니다!");
                this.props.history.push("/");
            }).catch(error => {
                alert("비밀번호 초기화 실패");
            });

    }

    render() {
        const email = this.state.email.value;
        return (
            <form onSubmit={this.SendNewPassword}>
                <h3>암호 재설정</h3>

                <div className="reset-message">
                    <p> 가입한 이메일을 입력해주세요. </p>
                    <p> 새로운 비밀번호를 메일로 전송합니다. </p>
                </div>

                <div className="form-group">
                    <label>이메일</label>
                    <input type="email" className="form-control" placeholder="Enter email" onBlur={this.FindEmail} onChange={this.handleChangeEmail} value={email} />
                </div>

                <p ref={this.checkEmail} className="check-message" hidden={true}> 해당 이메일로 가입된 계정이 없습니다. </p>

                <Button ref={this.submitBtn} type="submit" className="sendPsw" disabled={true} >확인</Button>

            </form>
        );
    }
}