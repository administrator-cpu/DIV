import api from "@/lib/axios"

export const getAllProducts = async () => {
    const {data} = await api.get('/services')
    return data?.data
}