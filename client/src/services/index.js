import { notification } from 'antd';
import axios from 'axios'
import { baseURL, decodedToken } from '~/utils';
import * as AccessService from "~/services/AccessService"

let instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_X_API_KEY,
    },
});


instance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token")
        if (token) {
            const { decoded } = decodedToken(token)
            config.headers["authorization"] = token
            config.headers["x-client-id"] = decoded?.userId
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    });


let refreshTokenPromise = null

instance.interceptors.response.use(
    async (response) => {
        return response.data;
    },
    async (error) => {
        const originalRequest = error.config
        if (error.response?.status === 410 && originalRequest) {
            if (!refreshTokenPromise) {
                refreshTokenPromise = AccessService.refreshToken()
                    .then(res => {
                        const { accessToken } = res.metadata.tokens
                        localStorage.setItem("token", accessToken)
                        instance.defaults.headers["authorization"] = accessToken
                    })
                    .catch(err => {
                        console.error("Log out")
                        return Promise.reject(err)
                    })
                    .finally(() => {
                        refreshTokenPromise = null
                    })
            }

            return refreshTokenPromise.then(() => {
                return instance(originalRequest)
            })
        }


        if (error.response?.status !== 410) {
            notification.error({
                message: error.response.data.message,
            });
        }
        return Promise.reject(error);
    }
);

export default instance
