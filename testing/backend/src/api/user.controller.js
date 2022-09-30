const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("./user.model")

module.exports = {
  async signup(req, res) {
    try {
      const { email, password } = req.body

      // bcrypt.hash dos argumentos
      // - La contraseña que queremos encriptar
      // - El salt hace referencias al número de procesos para encriptar
      const encPassword = await bcrypt.hash(password, 8)
      const user = await User.create({ email, password: encPassword })

      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET_KEY,
        { expiresIn: 60 * 60 * 24 }
      )

      res.status(201).json({ message: "User created successfully", data: { email, token } })
    } catch (err) {
      res.status(400).json({ message: "User could not created", error: err })
    }
  },

  async signin(req, res) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        throw new Error("Email o contraseña invalidos")
      }

      const isValid = await bcrypt.compare(password, user.password)

      if (!isValid) {
        throw new Error("Email o contraseña invalidos")
      }

      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET_KEY,
        { expiresIn: 60 * 60 * 24 }
      )

      res.status(201).json({ message: "User login successfully", data: { email, token } })
    } catch (error) {
      res.status(400).json({ message: "User could not login", error: error.message })

    }
  }
}