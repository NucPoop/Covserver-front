import { Spinner } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import './Covid.css';
import { getCovData } from './CovAPIs';
import { useState } from "react";

export default function Covid() {


    var date = new Date();
    var dateYet = new Date();
    var condition = "";

    //date.setDate(date.getDate() - 1);
    dateYet.setDate(date.getDate() - 1);

    condition += date.getFullYear();
    condition += (date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1)
    condition += date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate();

    var [covdata,setCovdata] = useState(null);
    if(covdata == null){
        getCovData(condition).then(response => {
            setCovdata(response.response.body.items);
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

    var [covdataYet,setCovdataYet] = useState(null);
    if(covdata == null){
        getCovData(condition).then(response => {
            setCovdataYet(response.response.body.items);
        }
        ).catch(error => {
            console.log(error);
        }
        );
    }

    
    if (covdata != null && covdataYet!=null) {
        return (
            <Table striped bordered hover size="sm" className="home-table">
                <thead>
                    <tr className="tableHead">
                        <th> 전국 </th>
                        <th>확진자</th>
                        <th>격리해제</th>
                        <th>치료환자</th>
                        <th>사망자</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>현재</td>
                        <td>{covdata.item.decideCnt}</td>
                        <td>{covdata.item.clearCnt}</td>
                        <td>{covdata.item.careCnt}</td>
                        <td>{covdata.item.deathCnt}</td>
                    </tr>
                    <tr>
                        <td>전일대비</td>
                        <td>{covdata.item.decideCnt - covdataYet.item.decideCnt}</td>
                        <td>{covdata.item.clearCnt - covdataYet.item.clearCnt}</td>
                        <td>{covdata.item.careCnt - covdataYet.item.careCnt}</td>
                        <td>{covdata.item.deathCnt - covdataYet.item.deathCnt}</td>
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