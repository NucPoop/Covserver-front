import React, { Component } from 'react';
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

            <div className="form-group">
                <label>아이디</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>비밀번호</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">로그인</button>
            <p className="forgot-password text-right">
                Forgot <a href="/">password?</a>
            </p>
        </form>
        );
    }
}

export default Auth;