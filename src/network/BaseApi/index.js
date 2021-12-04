import axios from 'axios';
import { BASE_URL } from '@env';


const getHeaders = (type) => ({
    'Content-Type': type === 'FormData' ? 'multipart/form-data' : 'application/json'
});


export const makePostRequest = (data, url, type) => {
    const options = {
        headers: getHeaders(type)
    };

    return new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}${url}`, data, options)
            .then(((response) => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    resolve(response);
                }
            }))
            .catch((err) => {
                if (err.response) {
                    reject(err.response.data);
                }
                else {
                    reject(new Error('Network Error'));
                }
            });
    });
};

export const makeGetRequest = (url, params = '') => {
    const options = {
        headers: getHeaders(),
        params,
    };
    
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}${url}`, options)
            .then((response) => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    resolve(response);
                }
            })
            .catch((err) => {
                if (err.response) {
                    // const { error } = err.response.data;
                    reject(err.response.data);
                } else {
                    reject(new Error('Network Error'));
                }
            });
    });
};