import '../style/LocationList.css'
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class LocationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ""
        }

        this.formControl = React.createRef();
    }

    submit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.location);
    }

    componentDidMount() {
        this.setState({
            location: this.formControl.current.value
        });
    }

    render() {
        return (
            <form className="location-list" onSubmit={this.submit}>
                <Form >
                    <Form.Group controlId="location-state">
                        <Form.Label className="label">지역</Form.Label>
                        <Form.Control ref={this.formControl} className="province" as="select" custom onChange={(event) => { this.state.location = event.target.value }}>
                            <option>서울</option>
                            <option>부산</option>
                            <option>대구</option>
                            <option>인천</option>
                            <option>광주</option>
                            <option>대전</option>
                            <option>울산</option>
                            <option>세종</option>
                            <option>경기</option>
                            <option>강원</option>
                            <option>충북</option>
                            <option>충남</option>
                            <option>전북</option>
                            <option>전남</option>
                            <option>경북</option>
                            <option>경남</option>
                            <option>제주</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Button type="submit" className="edit-info">{this.props.btnValue}</Button>
            </form>
        );
    }
}