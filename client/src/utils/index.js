export const convertData = ({ data }) => {
    const arr = data?.map(item => ({
        label: item.name,
        value: item.code
    }))
    return arr
}

export const baseURL = import.meta.env.VITE_BASE_URL;

