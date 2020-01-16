const devService = require('../../services/dev/dev.service')

module.exports = {

    async saveDev(req, res) {
        const devResponse = await devService.storeDev(req.body)

        return res.json(devResponse)
    },

    async getDevs(req, res) {
        const devsResponse = await devService.getDevs()

        return res.json(devsResponse)
    }

}
