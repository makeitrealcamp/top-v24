const users = require("../data")

module.exports = {
  users() {
    return users
  },
  user(parents, args) {
    const user = users.filter((item) => item.id == args.id)[0]

    return user
  }
}