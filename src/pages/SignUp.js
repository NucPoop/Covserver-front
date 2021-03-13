import '../style/SignUp.css';
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { signup } from './components/UserAPIs';

export default class SignUp extends Component {

    constructor(props){
        super(props);
        this.SignUp = this.SignUp.bind(this);
    }

    state = {
        email: {
            value: ''
        },
        password: {
            value: ''
        },
        isValid: true,

    }

    handleChangeEmail = input => {
        this.setState({
            email : {
                value:input.target.value
            }
        });
    };

    handleChangePassword = input =>{
        this.setState({
            password: {
                value:input.target.value
            }
        });
    };

    SignUp(event) {
        event.preventDefault();

        const signupRequest = {
            email: this.state.email.value,
            password: this.state.password.value
        };

        signup(signupRequest)
        .then(response => {
            alert("회원가입 완료, 로그인 해주세요.");
            this.props.history.push("/sign-in");
        }).catch(error => {
            alert("회원가입 실패");
        });
    }

    render() {
        const email = this.state.email.value;
        const password = this.state.password.value;
        return (
            <form onSubmit={this.SignUp}>
                <h3>회원가입</h3>

                <div className="form-group">
                    <label>이메일</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleChangeEmail} value={email}/>
                </div>

                <div className="form-group">
                    <label>비밀번호</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.handleChangePassword} value={password}/>
                </div>

                <p hidden={this.state.isValid} className="check-message"> 이미 사용 중인 이메일입니다. </p>

                <Button type="submit" className="sign-up">회원가입</Button>

                <p className="forgot-password text-right">
                    계정이 있으신가요? <a href={"/sign-in"}>로그인</a>
                </p>
            </form>
        );
    }
}