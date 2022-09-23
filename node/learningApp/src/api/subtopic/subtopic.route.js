const router = require("express").Router()
const subtopicController = require("./subtopic.controller")

router.route("/").get(subtopicController.list)
router.route("/:topicId").post(subtopicController.create)

module.exports = router
