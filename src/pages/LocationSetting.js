import '../style/LocationSetting.css';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import LocationList from './LocationList';
import { updateLocation, updateNotify } from './components/UserAPIs'
import { TimerSharp } from '@material-ui/icons';

export default class LocationSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "설정하기",
            time: '',
            notify: '',
            isTimeHidden: true
        }

        this.timeForm = React.createRef();
        this.selectForm = React.createRef();
    }

    setLocation = (value) => {

        const locationRequest = {
            location: value
        }

        updateLocation(locationRequest).then(response => {
            if(response.success){
                this.props.currentUser.location = locationRequest.location;
                this.setState({
                    isTimeHidden : false
                });
            }
        
            alert(response.message);
        }).catch(error => {
            alert(error);
        });
    }

    setNotify = (event) => {
        event.preventDefault();

        const notifyRequest = {
            notifyYn: this.state.notify,
            notifyTime: this.state.time
        }

        updateNotify(notifyRequest).then(response => {
            alert(response.message);

            if(response.success){
                this.props.currentUser.notifyYn = notifyRequest.notifyYn;
                this.props.currentUser.notifyTime = notifyRequest.notifyTime;
                this.props.history.push("/");
            }
            
        }).catch(error => {
            alert(error);
        })

    }

    setTime() {
        var arr = [];

        for (let i = 10; i <= 23; i++) {
            arr.push(<option key={i}>{i}</option>)
        }

        return arr;
    }

    componentDidMount() {
        this.setState({
            time: this.timeForm.current.value
        });

        if(this.props.currentUser.notifyYn != null){
            this.setState({
                notify :this.props.currentUser.notifyYn
            });
        }else{
            this.setState({
                notify : 'N'
            });
        }

        if(this.props.currentUser.location != null){
            this.setState({
                isTimeHidden : false
            });
        }

        if (this.props.currentUser.notifyTime != null) {
            this.timeForm.current.value = this.props.currentUser.notifyTime;
        }
    }

    render() {
        //const title = "설정하기";
        return (
            <div className="location-setting">
                <h3>지역 설정</h3>

                <LocationList btnValue={this.state.title} onSubmit={this.setLocation} location={this.props.currentUser == null ? null : this.props.currentUser.location} />

                <div className="alarm-setting" hidden={this.state.isTimeHidden}>
                    <h3>알림 설정</h3>

                    <Form>
                        <ToggleButtonGroup ref={this.selectForm} className="alarm-radio" type="radio" name="options" defaultValue={this.props.currentUser.notifyYn != null?this.props.currentUser.notifyYn:"N"} onChange={(select) => { this.setState({ notify : select}) }}>
                            <ToggleButton className="alarm-radiobtn" value={"Y"}>알림 허용</ToggleButton>
                            <ToggleButton className="alarm-radiobtn" value={"N"}>알림 거부</ToggleButton>
                        </ToggleButtonGroup>
                        <Form.Group controlId="timeset">
                            <Form.Label className="timeLabel">시간</Form.Label>
                            <Form.Control ref={this.timeForm} className="time" as="select" custom onChange={(time) => { this.state.time = time.target.value }}>
                                {this.setTime()}
                            </Form.Control>
                        </Form.Group>
                    </Form>

                    <form onSubmit={this.setNotify}>
                        <Button className="setalarm-btn" type="submit" controlId="setAlarm">변경하기</Button>
                    </form>

                </div>
            </div>
        );
    }
}