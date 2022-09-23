const router = require("express").Router()
const topicController = require("./topic.controller")

router.route("/").get(topicController.list)
router.route("/").post(topicController.create)

module.exports = router
