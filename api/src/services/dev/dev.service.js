const axios = require('axios')
const dev = require('../../models/dev.model')
const stringAsList = require('../../helpers/string-as-list')

module.exports = {

    async storeDev(body) {
        const { githubUsername, techs, latitude, longitude } = body

        const findedUser = await dev.findOne({ githubUsername })

        if(!findedUser) {
            const response = await axios.get(`https://api.github.com/users/${githubUsername}`)
        
            const { name = login, avatar_url, bio } = response.data
            const techsList = stringAsList(techs)
        
            const location = {
                type: 'Point',
                coordinates: [ longitude, latitude ]
            }
        
            const devResponse = await dev.create({
                name,
                githubUsername,
                bio,
                avatar_url,
                techs: techsList,
                location
            })
            
            return devResponse
        }
        
        return 'Usuário já cadastrado'
    },

    async getDevs() {
        return await dev.find()
    }

}
