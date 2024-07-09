//coutom events module is important for coutom event and other modules extend the event emitter e.g(http.server)
const EventEmitter = require('events')

const coustomEmitter = new EventEmitter()

coustomEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id:${id}`)
})
coustomEmitter.emit('response', 'john', 34)