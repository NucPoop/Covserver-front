import '../style/UserInfo.css'
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import LocationList from './LocationList';
import { updateLocation, updatePassword } from './components/UserAPIs'

export default class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            newPassword: "",
            email: ""
        }
    }

    updateSettings = (locationValue) => {

        var isCallUpdatePassword = false;

        const passwordRequest = {
            password: this.state.password,
            newPassword: this.state.newPassword
        }

        const locationRequest = {
            location: locationValue
        }

        updateLocation(locationRequest).then(response => {
            if (response.success) {
                this.props.currentUser.location = locationRequest.location;

                if (passwordRequest.password !== "" && passwordRequest.newPassword !== "") {
                    isCallUpdatePassword = true;
                    updatePassword(passwordRequest).then(response => {
                        if (response.success) {
                            this.props.onLogout();
                        }

                        alert(response.message);
                    }).catch(error => {
                        alert(error);
                    });
                }
            }

            if (!isCallUpdatePassword) {
                alert(response.message);
            }
        }).catch(error => {
            alert(error);
        });
    }

    handleChangePassword = input => {
        this.setState({
            password: input.target.value
        });
    };

    handleChangeNewPassword = input => {
        this.setState({
            newPassword: input.target.value
        });
    };

    componentDidMount() {
        console.log(this.props.currentUser);
        this.setState({
            email: this.props.currentUser.userEmail
        })
    }

    render() {
        return (
            <div>
                <div className="userinfo-form">
                    <h3>회원정보</h3>

                    <div className="form-group">
                        <label>이메일</label><br />
                        <label>{this.state.email}</label>
                    </div>

                    <div className="form-group">
                        <label>현재 비밀번호</label>
                        <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleChangePassword} />
                    </div>

                    <p className="check-message"> 비밀번호가 일치하지 않습니다. </p>

                    <div className="form-group">
                        <label>새 비밀번호</label>
                        <input type="password" className="form-control" placeholder="Enter password" value={this.state.newPassword} onChange={this.handleChangeNewPassword} />
                    </div>

                    <p className="check-message"> 현재 비밀번호와 같습니다. or 4자 이상, 20자 이하로 입력해주세요. </p>

                    <LocationList btnValue={"수정하기"} onSubmit={this.updateSettings} location={this.props.currentUser.location} />

                    <Button href="/withdrawal" type="button" className="withdraw">탈퇴하기</Button>

                </div>


            </div>
        );
    }
}