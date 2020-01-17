import { api } from "../base"

const getDevsSearch = async (latitude, longitude, techs) => {
    const response = await api.get('/search', {
            params: {
                latitude,
                longitude,
                techs
            }
        }
    )

    return response.data
}

export { getDevsSearch }
