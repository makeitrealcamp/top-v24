const app = require("./app")
const { connect } = require("./database")

const port = process.env.PORT;
connect()

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})