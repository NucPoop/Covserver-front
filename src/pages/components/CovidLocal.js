import { Spinner } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import './Covid.css';
import { getCovLocalData } from './CovAPIs';
import { useState, useRef, useEffect } from "react";

export default function CovidLocal(props) {

    var date = new Date();
    var dateYet = new Date();
    var condition = "";

    //date.setDate(date.getDate() - 1);
    dateYet.setDate(date.getDate() - 1);

    condition += date.getFullYear();
    condition += (date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1)
    condition += date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate();

    var [covdata, setCovdata] = useState(null);
    // var [propsdata, setPropsdata] = useState(null);

    // const prevCountRef = useRef();
    // useEffect(() => {
    //     prevCountRef.current = propsdata;
    // });
    // const userdata = prevCountRef.current;

    if (covdata == null) {
        getCovLocalData(condition).then(response => {
            const resData = response.response.body.items.item;

            resData.forEach(element => {
                if(element.gubun === props.currentUser.location){
                    setCovdata(element);
                }
            });
        }
        ).catch(error => {
            console.log(error);
        }
        );
    }

    condition = "";
    condition += dateYet.getFullYear()
    condition += (dateYet.getMonth() + 1) < 10 ? ("0" + (dateYet.getMonth() + 1)) : (dateYet.getMonth() + 1)
    condition += dateYet.getDate() < 10 ? ("0" + dateYet.getDate()) : dateYet.getDate();

    var [covdataYet, setCovdataYet] = useState(null);
    if (covdata == null) {
        getCovLocalData(condition).then(response => {
            const resData = response.response.body.items.item;

            resData.forEach(element => {
                if(element.gubun === props.currentUser.location){
                    setCovdataYet(element);
                }
            });

        }
        ).catch(error => {
            console.log(error);
        }
        );
    }


    if (covdata != null && covdataYet != null) {
        return (
            <Table striped bordered hover size="sm" className="home-table">
                <thead>
                    <tr className="tableHead">
                        <th> {props.currentUser.location} </th>
                        <th>확진자</th>
                        <th>격리해제</th>
                        <th>치료환자</th>
                        <th>사망자</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>현재</td>
                        <td>{covdata.defCnt}</td>
                        <td>{covdata.isolClearCnt}</td>
                        <td>{covdata.isolIngCnt}</td>
                        <td>{covdata.deathCnt}</td>
                    </tr>
                    <tr>
                        <td>전일대비</td>
                        <td>{covdata.incDec}</td>
                        <td>{covdata.isolClearCnt - covdataYet.isolClearCnt}</td>
                        <td>{covdata.isolIngCnt - covdataYet.isolIngCnt}</td>
                        <td>{covdata.deathCnt - covdataYet.deathCnt}</td>
                    </tr>
                </tbody>
            </Table>
        );
    } else {
        return (
            <div>
                <Spinner className="loading" animation="border" />
            </div>

        );
    }

}