const mongoose = require("mongoose")

let connection

async function connect() {
  if (connection) return

  const mongoUri = process.env.MONGO_URI

  connection = mongoose.connection
  connection.once("open", () => {
    console.log("Connection succcessfully mongo")
  })

  connection.on("error", (error) => {
    console.log("Something went wrong!", error)
  })

  await mongoose.connect(mongoUri)
}

module.exports = { connect }