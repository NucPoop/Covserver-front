import axios from "axios";
import { Component } from "react";
import { Spinner } from "react-bootstrap";
import Table from 'react-bootstrap/Table';


class CovidTemp extends Component {
    state = {
        loading: false,
        data: [],
        dataYesterday: [],
        date: new Date()
    };

    getData = async () => {
        var dateCon = "";
        var dateConYet = "";
        dateCon += this.state.date.getFullYear();

        if((this.state.date.getMonth()+ 1) < 10){
            dateCon += "0" + (this.state.date.getMonth() + 1);
        }else{
            dateCon += this.state.date.getMonth() + 1;
        }

        dateConYet = dateCon;
        if(this.state.date.getDate() - 1 < 10){
            dateConYet += "0" + this.state.date.getDate();
        }else{
            dateConYet += this.state.date.getDate();
        }


        if(this.state.date.getDate() < 10){
            dateCon += "0" + this.state.date.getDate();
        }else{
            dateCon += this.state.date.getDate();
        }

        axios(
            {
                // url: '/api/cov?date=' + dateCon,
                // method: 'get',
                // baseURL: 'http://localhost:8080',
                // withCredentials: true,
            }
        ).then((response) => {
            let result = response.data.response.body.items;
            this.setState({
                data: result
            });
            axios({
                // url: '/api/cov?date=' + dateConYet,
                // method: 'get',
                // baseURL: 'http://localhost:8080',
                // withCredentials: true,
            }).then((respon) => {
                let yet = respon.data.response.body.items;
                this.setState({
                    loading: true,
                    dataYesterday: yet
                });
            });
        });
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        const { data } = this.state;
        const { dataYesterday } = this.state;
        if (this.state.loading) {
            return (
                <Table striped bordered hover size="sm" className="home-table">
                    <thead>
                        <tr>
                            <th> - </th>
                            <th>확진자</th>
                            <th>격리해제</th>
                            <th>치료환자</th>
                            <th>사망자</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>현재</td>
                            <td>{data.item.decideCnt}</td>
                            <td>{data.item.clearCnt}</td>
                            <td>{data.item.careCnt}</td>
                            <td>{data.item.deathCnt}</td>
                        </tr>
                        <tr>
                            <td>전일대비</td>
                            <td>{data.item.decideCnt - dataYesterday.item.decideCnt}</td>
                            <td>{data.item.clearCnt - dataYesterday.item.clearCnt}</td>
                            <td>{data.item.careCnt - dataYesterday.item.careCnt}</td>
                            <td>{data.item.deathCnt - dataYesterday.item.deathCnt}</td>
                        </tr>
                    </tbody>
                </Table>
            );
        } else {
            return <Spinner />;
        }

    }
}

export default CovidTemp;