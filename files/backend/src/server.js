require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const formData = require("./utils/formData")

const port = 8080
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.post("/", formData, (req, res) => {
  console.log("Este es el nuevo body:", req.body)
  res.status(200).json({ ...req.body })
})

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})