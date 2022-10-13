require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { connect } = require("./database")
const todoRoute = require("./api/todo/todo.route")
const userRoute = require("./api/user/user.route")
const commentRoute = require("./api/comment/comment.route")

const app = express()
const port = process.env.PORT || 8080
connect()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use("/todos", todoRoute)
app.use("/users", userRoute)
app.use("/comments", commentRoute)

app.listen(port, () => {
  console.log(`App runnning in http://localhost:${port}`)
})