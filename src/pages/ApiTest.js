import axios from "axios";
import { Component } from "react";
//import customAxios from "../utils/customAxios";

class ApiTest extends Component {
    //const [covdata, setCovdata] = useState('');

    state = {
        data: [],
    };

    //const result = useState('');
    // function callback(data) {
    //     setCovdata(data);
    // }
    getData = async () => {
        axios(
            {
                url: '/api' + '/cov',
                method: 'post',
                baseURL: 'http://localhost:8080',
                withCredentials: true,
            }
        ).then((response) => {
            let data = response.data.response.body.items.item[0];
            const obj = JSON.parse(JSON.stringify(data));

            //console.log(obj.item[0].stateDt);
            console.log(JSON.stringify(data));
            this.setState({ data });

        });
    };

    componentDidMount(){
        this.getData();
    }

    render() {
        return (
            <div>
                코로나 데이터 JSON : 
                {/* {
                    this.state.data.map((data) => {
                        return <p>stateDt : {data.stateDt}</p>
                    })
                } */}
            </div>
        );
    }
}

export default ApiTest;