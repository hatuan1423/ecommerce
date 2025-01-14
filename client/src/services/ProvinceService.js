import axios from "axios"

export const getAllProvince = async () => {
    const res = await axios.get(`${import.meta.env.VITE_PROVINCE_API}/provinces/getAll?limit=-1`)
    return res.data
}

export const getByProvince = async (value) => {
    const res = await axios.get(`${import.meta.env.VITE_PROVINCE_API}/districts/getByProvince?provinceCode=${value}&limit=-1`)
    return res.data
}

export const getByDistrict = async (value) => {
    const res = await axios.get(`${import.meta.env.VITE_PROVINCE_API}/wards/getByDistrict?districtCode=${value}&limit=-1`)
    return res.data
}

