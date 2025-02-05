import { notification } from 'antd';
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';
import { baseURL } from '~/utils';

export const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_X_API_KEY
    },
});

const handleDecoded = () => {
    try {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            return decoded;
        }
    } catch (error) {
        console.error('Token decode error:', error);
    }
    return null;
};

instance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token');
        const decoded = handleDecoded();

        if (token) {
            config.headers.authorization = token
        }
        if (decoded?.userId) {
            config.headers['x-client-id'] = decoded?.userId;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    });

instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        notification.error({
            message: error.response.data.message,
        });
        return Promise.reject(error.response.data);
    }
);