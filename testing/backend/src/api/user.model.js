const { model, Schema, models } = require("mongoose")
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "el correo es requerido"],
      match: [emailRegex, "el email no es valido"],
      validate: {
        async validator(email) {
          try {
            const user = await models.user.findOne({ email })
            return !user
          } catch (err) {
            return false
          }
        },
        message: "El correo ya existe"
      },
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

const User = model("user", userSchema)

module.exports = User