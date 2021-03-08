import { useEffect, useState } from "react";
import customAxios from "../utils/customAxios";

function ApiTest() {
    const [covdata, setCovdata] = useState('');

    function callback(data) {
        setCovdata(data);
    }

    useEffect(
        () => {
            console.log("call api");
            customAxios('/cov', callback);
        },[]
    );


    return (
        <div>
           코로나 데이터 JSON : {covdata}
        </div>
    );
}

export default ApiTest;