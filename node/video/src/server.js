require("dotenv").config()
const morgan = require("morgan")
const cors = require("cors")
const express = require("express");
const { connect } = require("./db")
const videoRoute = require("./routes/video.route")
const userRoute = require("./routes/user.route");
const { deleteModel } = require("mongoose");

const app = express();
const port = 8080;
connect();

app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())

// Rutas - endpoint
app.use("/video", videoRoute)
app.use("/users", userRoute);


app.listen(port, () => {
  console.log("App running OK")
})
