require("dotenv").config()
const express = require("express");
const { connect } = require("./db")
const videoRoute = require("./routes/video.route")

const app = express();
const port = 8080;
connect();

app.use(express.json())

// Rutas - endpoint
app.use("/video", videoRoute)


app.listen(port, () => {
  console.log("App running OK")
})