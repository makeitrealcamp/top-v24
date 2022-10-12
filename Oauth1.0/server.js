require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const passport = require("passport")
const TwitterStrategy = require("passport-twitter")
const session = require("cookie-session")

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id)
  done(null, user)
})

passport.use(
  new TwitterStrategy({
    consumerKey: process.env.TWITTER_API_KEY,
    consumerSecret: process.env.TWITTER_API_KEY_SECRET,
    callUrl: "auth/twitter/callback"
  },
    async (token, tokenSecret, profile, done) => {
      console.log("USER:", profile)
      const user = await User.findOne({ twitterId: profile._json.id_str })

      if (user) return done(null, user)

      const newUser = await User.create({
        name: profile._json.name,
        twitterId: profile._json.id_str
      })

      return done(null, newUser)

    })
)

const app = express()
const port = 8080

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(
  session({
    secret: process.env.COOKIES_SECRET,
    maxAge: 1000 * 60 * 60 * 24
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.get("/auth/twitter", passport.authenticate("twitter"))

app.get("/auth/twitter/callback", {
  successRedirect: "/auth/twitter/success",
  failureRedirect: "/auth/twitter/failure"
})

app.get("/auth/twitter/success", (req, res) => {
  res.status(200).json({ message: "Successfully" })
})

app.get("/auth/twitter/failure", (req, res) => {
  res.status(401).json({ message: "failed" })
})

app.listen(port, (req, res) => {
  console.log("Server OK")
})