const router = require("express").Router();
const userController = require("./user.controller");

/**
 * @openapi
 * /users:
 *  get:
 *   tags:
 *   - Users
 *   description: GET all users
 *   responses:
 *    200:
 *     description: An array of users
 *     content:
 *      application/json:
 *        schema:
 *          type: array
 *          items:
 *            $ref: "#/components/schemas/userResponse"
 */
router.route("/").get(userController.list)

/**
 * @openapi
 * /users/{userId}:
 *  get:
 *   tags:
 *   - Users
 *   description: GET a single user
 *   parameters:
 *   - in: path
 *     name: userId
 *     description: Thbe userId of the user to get
 *     required: true
 *   responses:
 *    200:
 *     description: A single user
 *     content:
 *      application/json:
 *        schema:
 *          type: array
 *          items:
 *            $ref: "#/components/schemas/userResponse"
 *    404: 
 *      description: User not found,
 *      content:
 *        application/json:
 *         schema:
 *          $ref: "#/components/schemas/userNotFound"
 */
router.route("/:userId").get(userController.show)
router.route("/").post(userController.create);

module.exports = router;

