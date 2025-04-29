const { Socket } = require("socket.io")

module.exports=(io)=>{
    io.on('connection',(socket)=>{
        console.log('se ha conectado  a un nuevo cliente al servidor')
        socket.on('disconect',()=>{
                console.log('el cliente se ha desconectado del servidor')
        })
    })
}