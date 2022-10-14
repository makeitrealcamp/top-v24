import mongoose from "mongoose"

export let connection: mongoose.Connection

export async function connect(): Promise<void> {
  if (connection) return

  const mongoUri = "url-cluster-mongoAtlas"

  await mongoose.connect(mongoUri)

  connection = mongoose.connection

  connection.once("open", () => {
    console.log("Connections mongo is Ok")
  })

}

export async function disconnect(): Promise<void> {
  if (!connection) return

  await mongoose.disconnect()
}