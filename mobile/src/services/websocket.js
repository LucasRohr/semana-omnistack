import socketio from 'socket.io-client'
import { baseUrl } from './base-url'

const socket = socketio(baseUrl, {
    autoConnect: false
})

const connect = (latitude, longitude, search) => {
    socket.io.opts.query = {
        latitude,
        longitude,
        search
    }

    socket.connect()
}

const disconnect = () => {
    if(socket.connected) socket.disconnect()
}

const subscribeToNewDevs = (subscribeFunction) => {
    socket.on('new-dev', subscribeFunction)
}

export {
    connect,
    disconnect,
    subscribeToNewDevs
}
