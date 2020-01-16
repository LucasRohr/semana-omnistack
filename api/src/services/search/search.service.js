const dev = require('../../models/dev.model')
const stringAsList = require('../../helpers/string-as-list')

module.exports = {

    async getSearchedDevs(query) {
        const { latitude, longitude, techs } = query
        const techsList = stringAsList(techs)

        const findedDevs = await dev.find({
            techs: {
                $in: techsList
            },

            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [ longitude, latitude ]
                    },

                    $maxDistance: 10000
                }
            }
        })

        return findedDevs
    }

}
