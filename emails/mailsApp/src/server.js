require("dotenv").config()
const express = require("express") //
const cors = require("cors")
const morgan = require("morgan")
const { connect } = require("./database")
const userRoute = require("./api/user/user.route")
const { transporter, verify } = require("./utils/mailer")


const port = 8080; //
const app = express() //
connect()
verify(transporter)

app.use(cors())
app.use(morgan("dev"))
app.use(express.json()) //

app.use("/users", userRoute)

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
}) //
