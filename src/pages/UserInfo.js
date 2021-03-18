import '../style/UserInfo.css'
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import LocationList from './LocationList';
import { updateLocation, updatePassword } from './components/UserAPIs'
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

export default class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            newPassword: "",
            email: ""
        }
        this.newPswCheck = React.createRef();
        this.editBtn = React.createRef();
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


                        alert(response.message);
                        if (response.success) {
                            this.props.onLogout();
                            this.props.history.push("/");
                        }

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

                    <div className="form-group">
                        <label>새 비밀번호</label>
                        <input type="password" className="form-control" placeholder="Enter password" value={this.state.newPassword} onChange={this.handleChangeNewPassword} onBlur={this.validatePassword} />
                    </div>

                    <p ref={this.newPswCheck} className="check-message" hidden={true}> 4자 이상, 20자 이하로 입력해주세요. </p>

                    <LocationList ref={this.editBtn} btnValue={"수정하기"} onSubmit={this.updateSettings} location={this.props.currentUser == null ? null : this.props.currentUser.location} />

                    
                    <Link className="nav-link" to={"/withdrawal"}>
                        <Button type="button" className="withdraw">탈퇴하기</Button>
                    </Link>

                </div>


            </div>
        );
    }

    validatePassword = () => {
        let newPassword = this.state.newPassword;
        if (newPassword.length < 4) {
            this.newPswCheck.current.innerHTML = "4자 이상 입력해주세요.";
            this.newPswCheck.current.hidden = false;
        } else if (newPassword.length > 20) {
            this.newPswCheck.current.innerHTML = "20자 이하 입력해주세요.";
            this.newPswCheck.current.hidden = false;
        } else {
            this.newPswCheck.current.hidden = true;
            this.editBtn.current.disabled = false;
        }
    }
}