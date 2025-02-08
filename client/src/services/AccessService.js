import { baseURL } from '~/utils';
import instance from '.';
import axios from 'axios';

export const signup = async (data) => {
    const res = await instance.post(`${baseURL}/shop/signup`, data);
    return res;
};

export const login = async (data) => {
    const res = await instance.post(`${baseURL}/shop/login`, data, {
        withCredentials: true
    })
    return res
}

export const refreshToken = async () => {
    const res = await instance.post(`${baseURL}/shop/refreshToken`, {}, {
        withCredentials: true
    })
    return res
}