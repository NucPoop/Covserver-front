import axios from "axios";
import { useState, useEffect } from "react";
//import customAxios from "../utils/customAxios";

export default function Covtotal(condition) {
    const [covdata, setCovdata] = useState(null);

    const option = {
        url: '/api/cov/?date='+ condition,
        method: 'get',
        baseURL: 'http://localhost:8080',
        withCredentials: true,
    }

    async function fetchUrl(){
        await axios(option).then(response =>{
            const temp = response.data.response.body.items;
            setCovdata(temp);
        }).catch(error =>{
            console.log(error);
        });
    }

    useEffect(()=>{
        fetchUrl();
    });

    return [covdata];
    
}