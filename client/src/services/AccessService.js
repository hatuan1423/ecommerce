import { baseURL } from '~/utils';
import { instance } from '.';

export const signup = async (data) => {
    const res = await instance.post(`${baseURL}/shop/signup`, data);
    return res;
};

export const login = async (data) => {
    const res = await instance.post(`${baseURL}/shop/login`, data)
    return res
}