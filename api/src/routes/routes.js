const { Router } = require('express')
const devController = require('../controllers/dev/dev.controller')
const searchController = require('../controllers/search/search.controller')

const routes = Router()

routes.post('/devs', devController.saveDev)

routes.get('/devs', devController.getDevs)
routes.get('/search', searchController.getDevsBySearch)

module.exports = routes
