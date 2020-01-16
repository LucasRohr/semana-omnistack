const dev = require('../../models/dev.model')
const searchService = require('../../services/search/search.service')

module.exports = {

    async getDevsBySearch(req, res) {
        const searchResponse = await searchService.getSearchedDevs(req.query)

        return res.json(searchResponse)
    }

}
