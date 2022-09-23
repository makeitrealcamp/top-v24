const User = require("./user.model");

module.exports = {

  async list(req, res) {
    try {
      const users = await User.find().populate("videos", "title description")

      res.status(201).json({ message: "Users found", data: users });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async show(req, res) {
    try {
      const { userId } = req.params

      const user = await User.findById(userId)
        .populate({
          path: "videos",
          populate: {
            path: "user",
            select: "name -_id"
          }
        })

      res.status(201).json({ message: "User found", data: user });
    } catch (err) {
      res.status(400).json(err);
    }

  },

  create(req, res) {
    const data = req.body;

    const newUser = {
      ...data,
    };

    User.create(newUser)
      .then((user) => {
        res.status(201).json({ message: "User created", data: user });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
