const path = require("path")
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const { version } = require("../package.json")
const routesApi = path.join(__dirname, "./api/**/*.route.js")

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LearningAPP",
      version,
      description: "App del top 24",
      contact: {
        name: "Sergio Jaramillo",
        email: "sergio.jaramillo@makeitreal.camp",
      }
    },
    components: {
      schemas: {
        userResponse: {
          type: "object",
          properties: {
            rol: {
              type: String,
              description: "rol of the user",
              example: "admin"
            },
            name: {
              type: String,
              description: "name of the user",
              example: "John Doe"
            },
            email: {
              type: String,
              description: "email of the user",
              example: "jhond@test.com"
            }
          }
        },
        userNotFound: {
          type: "object",
          properties: {
            message: {
              type: String,
              description: "Message of the error",
              example: "user not found"
            }
          }
        }
      }
    }
  },
  apis: [routesApi]
}

const swaggerSpec = swaggerJsDoc(options)

function swaggerDoc(app, port) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  console.log(`Swagger running on http://localhost:${port}/docs`)
}

module.exports = swaggerDoc