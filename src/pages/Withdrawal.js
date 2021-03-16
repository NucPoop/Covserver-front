import '../style/Withdrawal.css';
import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import { withdraw } from './components/UserAPIs';

class Withdrawal extends Component {
    constructor(props) {
        super(props);
        this.withdrawBtn = React.createRef();
        this.withdraw = this.withdraw.bind(this);
    }

    state = {
        password: {
            value: ''
        },
    }

    handlePasswordInput = input => {
        this.setState({
            password: {
                value: input.target.value
            }
        });
    }

    withdrawBtnCheck = () => {
        if (this.state.password.value.length > 0) {
            this.withdrawBtn.current.disabled = false;
        } else {
            this.withdrawBtn.current.disabled = true;
        }
    }

    withdraw(event) {
        event.preventDefault();
        console.log("ok");

        const WithdrawRequest = {
            password: this.state.password.value
        };

        withdraw(WithdrawRequest)
            .then(response => {
                if(response.success){
                    this.props.onLogout();
                    this.props.history.push("/");
                    alert(response.message);
                }else{
                    alert(response.message);
                }
            }).catch(error => {
                alert("탈퇴 오류 발생");
            });
    }

    render() {
        const password = this.state.password.value;
        return (
            <form onSubmit={this.withdraw}>
                <h3>회원탈퇴</h3>

                <div className="form-group">
                    <label>비밀번호</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.handlePasswordInput} onBlur={this.withdrawBtnCheck} value={password} />

                    <p className="check-message"> 계정을 다시 복구할 수 없습니다. 탈퇴하시겠습니까? </p>

                    <Button ref={this.withdrawBtn} type="submit" className="withdraw2" disabled={true}>탈퇴하기</Button>
                </div>
            </form>
        );
    }
}

export default Withdrawal;