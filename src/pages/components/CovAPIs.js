import { API_BASE_URL, ACCESS_TOKEN } from '../Index';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function getCovData(condition) {
    return request({
        url: API_BASE_URL + "/cov/?date=" + condition,
        method: 'GET'
    });
}

export function getCovLocalData(condition) {
    return request({
        url: API_BASE_URL + "/cov/local?date=" + condition,
        method: 'GET'
    });
}