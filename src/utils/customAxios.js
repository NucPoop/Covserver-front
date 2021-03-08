import axios from 'axios';

export default function customAxios(url, callback) {
    console.log(url);
    axios(
        {
            url: '/api' + url,
            method:'post',
            baseURL: 'http://localhost:8080',
            withCredentials: true,
        }
    ).then(function(response){
            callback(response.data);
        }
    );
}