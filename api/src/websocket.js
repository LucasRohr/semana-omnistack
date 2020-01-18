const socketio = require('socket.io')
const stringAsList = require('./helpers/string-as-list')
const calculateDistance = require('./helpers/calculate-distance')

const connections = []
let io

exports.setupWebsocket = (server) => {
    io = socketio(server)
    
    io.on('connection', socket => {
        const { latitude, longitude, search } = socket.handshake.query

        connections.push({
            id: socket.id,
            coords : {
                latitude: Number(latitude),
                longitude: Number(longitude)
            },
            techs: stringAsList(search)
        })
    })
}

exports.findConnections = (coords, techs) => {
    return connections.filter(connection => {
        const distanceInRange = calculateDistance(coords, connection.coords) < 10
        console.log(distanceInRange);
        
        const techsInSearch = connection.techs.some(tech => techs.includes(tech))

        console.log(techsInSearch);
        
        return distanceInRange && techsInSearch
    })
}

exports.sendMessage = (to, message, data) => {
    to.forEah((connection) => {
        io.to(connection.id).emit(message, data)
    })
}
