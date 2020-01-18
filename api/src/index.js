const express =  require('express')
const mongoose =  require('mongoose')
const routes = require('./routes/routes')
const cors = require('cors')
const http = require('http')
const { setupWebsocket } = require('./websocket.js')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect(
    'mongodb+srv://Lucas:ifao300@cluster0-nid0k.mongodb.net/omnistack?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)
