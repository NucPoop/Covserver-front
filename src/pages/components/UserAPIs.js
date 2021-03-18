import { API_BASE_URL, ACCESS_TOKEN } from '../Index';

//import axios from "axios";
//import { useState, useEffect } from "react";

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

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/user/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function checkEmailAvailability(email) {
    return request({
        url: API_BASE_URL + "/user/checkEmail?email=" + email,
        method: 'GET'
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/user/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function updatePassword(passwordRequest) {
    return request({
        url: API_BASE_URL + "/user/updatePassword",
        method: 'POST',
        body: JSON.stringify(passwordRequest)
    });
}

export function getCurrentUser() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function withdraw(passwordRequest) {
    return request({
        url: API_BASE_URL + "/user/withdrawal",
        method: 'DELETE',
        body: JSON.stringify(passwordRequest)
    });
}

export function updateLocation(locationRequest) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/updateLocation",
        method: 'POST',
        body: JSON.stringify(locationRequest)
    });
}

export function updateNotify(notifyRequest){
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/user/updateNotify",
        method: 'POST',
        body: JSON.stringify(notifyRequest)
    });
    
}

export function resetPassword(emailRequest){
    return request({
        url: API_BASE_URL + "/user/resetPassword",
        method: 'POST',
        body: JSON.stringify(emailRequest)
    });
}