const express = require("express")
const SocketIO = require("socket.io")
const http = require("http")

const port = 8080
const app = express()
const server = http.createServer(app)
const io = SocketIO(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"]
  }
})

io.on("connection", (socket) => {
  console.log("new connection")

  socket.emit("welcome", { message: "Hola mundo!" })

  socket.on("message", (data) => {
    console.log("MESSAGE:", data)
    io.emit("broadcast", "Hay un usuario nuevo diciendo 'Hola!'")
    io.to("some room").emit("private", "Hola estoy en una sala privada")
  })

  socket.on("join room", (data) => {
    console.log("Nuevo usuario en la sala")
    //socket.join(`${data}`)
    socket.join("some room")
  })

  socket.on("disconnect", () => {
    console.log("user disconnect")
  })

})


server.listen(port, () => {
  console.log("Server OK")
})