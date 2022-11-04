const { GraphQLServer } = require("graphql-yoga")
const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")


const port = 8000

const resolvers = {
  Query,
  Mutation
}

const app = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers
})


app.start({ port }, (deeds) => {
  console.log(`Server running on http://localhost:${deeds.port}`)
})