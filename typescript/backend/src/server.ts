import express from "express"
import cors from "cors"
import morgan from "morgan"
import { connect } from "./database"
import userRouter from "./api/user/user.route"

const port = 8080
const app = express()
connect()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use("/users", userRouter)

app.get("/test", () => {
  console.log("Todo bien")
})

app.listen(port, () => {
  console.log("Server ok")
})