import { jwtDecode } from "jwt-decode"

export const convertData = ({ data }) => {
    const arr = data?.map(item => ({
        label: item.name,
        value: item.code
    }))
    return arr
}

export const isJsonString = (data) => {
    try {
        JSON.parse(data)
    } catch (error) {
        return false
    }
    return true
}

export const decodedToken = (token) => {
    try {
        const decoded = jwtDecode(token);
        return {
            decoded, token
        }
    } catch (error) {
        console.error("Token decode error:", error);
    }
}

export const baseURL = import.meta.env.VITE_BASE_URL;

