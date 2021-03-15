import '../style/Auth.css';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {ACCESS_TOKEN} from './Index';
import {login} from './components/UserAPIs';

class Login extends Component {

    constructor(props) {
        super(props);
        this.SignIn = this.SignIn.bind(this);
    }

    state = {
        email: {
            value: ''
        },
        password: {
            value: ''
        },

    }

    SignIn(event) {
        event.preventDefault();

        const loginRequest = {
            email: this.state.email.value,
            password: this.state.password.value
        };

        login(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                this.props.history.push("/");
                window.location.reload(false);
            }).catch(error => {
                if (error.status === 401) {
                    alert("아이디나 비밀번호가 잘못되었습니다.");
                } else {
                    alert("로그인 실패");
                }
            });

    }

    handleChangeEmail = input => {
        this.setState({
            email: {
                value: input.target.value
            }
        });
    };

    handleChangePassword = input => {
        this.setState({
            password: {
                value: input.target.value
            }
        });
    };

    render() {
        const email = this.state.email.value;
        const password = this.state.password.value;
        return (
            // <form className="form-signin">
            //     <h2 className="form-signin-heading"> Please sign in </h2>
            //     <label for="inputEmail" className="sr-only"> Email address
            //     </label>
            //     <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            //     <label for="inputPassword" className="sr-only"> Password</label>
            //     <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            //     <button className="btn btn-lg btn-primary btn-block" type="button"> Sign in
            //     </button>
            // </form>
            <form onSubmit={this.SignIn}>
                <h3>로그인</h3>

                <div className="form-group">
                    <label>아이디</label>
                    <input type="email" className="form-control" placeholder="Enter email" required onChange={this.handleChangeEmail} value={email} />
                </div>

                <div className="form-group">
                    <label>비밀번호</label>
                    <input type="password" className="form-control" placeholder="Enter password" required onChange={this.handleChangePassword} value={password}/>
                </div>

                <p className="check-message" hidden={true}> 가입되지 않은 이메일입니다. </p>

                <p className="forgot-password text-center">
                    계정이 없으신가요? <a href={"/sign-up"}>회원가입</a>
                </p>

                <Button type="submit" className="login">로그인</Button>

                <p className="forgot-password text-right">
                    <a href="/findpsw">비밀번호를 잊으셨나요?</a>
                </p>
            </form>
        );
    }
}

export default Login;