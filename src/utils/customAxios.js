import axios from 'axios';

export default function customAxios(url, callback) {
    console.log("api call : " + url);
    // state={
    //     loading: false,
    //     ItemList: []
    // };

    
    axios(
        {
            url: '/api' + url,
            method:'post',
            baseURL: 'http://localhost:8080',
            withCredentials: true,
        }
    ).then(function(response){
            callback(response=> response);
        }
    );
}