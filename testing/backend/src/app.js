require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const userRouter = require("./api/user.route")

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))

app.use("/auth/local", userRouter)

app.get("/", (req, res) => {
  res.status(200).send("Hello world")
})

module.exports = app