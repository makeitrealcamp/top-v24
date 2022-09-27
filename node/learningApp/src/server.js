require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { connect } = require("./db")
const swagger = require("./swagger")
const topicRoute = require("./api/topic/topic.route")
const subtopicRoute = require("./api/subtopic/subtopic.route")
const userRoute = require("./api/user/user.route")
const commentRoute = require("./api/comment/comment.route")

const app = express();
const port = process.env.PORT || 8000
connect()

app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())
swagger(app, port)

app.use("/topics", topicRoute)
app.use("/subtopics", subtopicRoute)
app.use("/users", userRoute)
app.use("/comments", commentRoute)

app.listen(port, () => {
  console.log(`App running in http://localhost:${port}`)
})
