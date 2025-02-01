import { notification } from 'antd';
import axios from 'axios'
import { baseURL } from '~/utils';

export const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'pass'
    },
});

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.authorization = token
    }
    return config;
});

instance.interceptors.response.use(
    (response) => {
        return response.data.data;
    },
    (error) => {
        notification.error({
            message: error.response.data.message,
        });
        return Promise.reject(error.response.data);
    }
);