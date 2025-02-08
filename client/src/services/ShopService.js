import { baseURL } from '~/utils';
import instance from '.';


export const getDetail = async ({ shopId }) => {
    const res = await instance.get(`${baseURL}/shop/${shopId}`);
    return res;
};
