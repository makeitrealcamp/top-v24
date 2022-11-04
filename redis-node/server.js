const express = require("express")
const axios = require("axios")
const { createClient } = require("redis")

const app = express()
const client = createClient()

app.get("/characters", async (req, res) => {
  try {
    const reply = await client.get("redisMemory")

    if (reply) {
      return res.json(JSON.parse(reply))
    }

    const response = await axios.get("https://rickandmortyapi.com/api/character")

    const expires = 60 * 60 * 24 // 24 hours 

    await client.set("redisMemory", JSON.stringify(response.data), {
      EX: expires
    })

    res.json(response.data)
  } catch (error) {
    res.json(error)
  }
})


app.listen(8080, async () => {
  client.on("error", (err) => console.log("Redis Client Error", err))

  await client.connect()
  console.log("Listening on port 8080")
})