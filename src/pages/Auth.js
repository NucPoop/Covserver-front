import '../style/Auth.css';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Auth extends Component {
    render() {
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
            <form>
            <h3>로그인</h3>

            <p className="check-message"> 가입되지 않은 이메일입니다. </p>

            <div className="form-group">
                <label>아이디</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>비밀번호</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <p className="forgot-password text-center">
                계정이 없으신가요? <a href={"/sign-up"}>회원가입</a>
            </p>
        
            <Button onClick="/" type="submit" className="login">로그인</Button>
            
            <p className="forgot-password text-right">
                 <a href="/findpsw">비밀번호를 잊으셨나요?</a>
            </p>
        </form>
        );
    }
}

export default Auth;