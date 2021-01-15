import React, { Component } from "react";

export default class Withdrawal extends Component {
    render() {
        return (
            <form>
                <h3>회원탈퇴</h3>

                <div className="form-group">
                    <label>비밀번호</label>
                    <input type="text" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">탈퇴</button>
            </form>
        );
    }
}