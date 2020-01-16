import { api } from '../baseUrl'

export const saveDev = async (dev) => {
    const response = await api.post('/devs', dev)

    return response.data
}

export const getDevs = async () => {
    const result = await api.get('/devs')

    return result
}
