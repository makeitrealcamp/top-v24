const router = require("express").Router()
const todoController = require("./todo.controller")

router.route("/").get(todoController.list)
router.route("/:todoId").get(todoController.show)
router.route("/:userId").post(todoController.create)
router.route("/:todoId").put(todoController.update)
router.route("/:todoId").delete(todoController.destroy)

module.exports = router
