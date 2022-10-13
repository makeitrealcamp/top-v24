const Todo = require("./todo.model")
const User = require("../user/user.model")

module.exports = {

  //GET
  async list(req, res) {
    try {
      const todo = await Todo.find()

      res.status(200).json({ message: "Todo found", data: todo })
    } catch (error) {
      res.status(400).json({ message: "Todo not found", data: error })
    }
  },

  //GET:id
  async show(req, res) {
    try {
      const { todoId } = req.params

      const todo = await Todo.findById(todoId)

      res.status(200).json({ message: "Todo found", data: todo })
    } catch (error) {
      res.status(400).json({ message: "Todo not found", data: error })
    }
  },


  //POST
  async create(req, res) {
    try {
      const { userId } = req.params
      const data = req.body

      const user = await User.findById(userId)
      // user = existe = {}
      // user = no existe = null

      if (!user) {
        throw new Error("El usuario no existe")
      }

      const todo = await Todo.create({ ...data, user: userId })
      user.todos.unshift(todo)
      await user.save({ validateBeforeSave: false })

      res.status(201).json({ message: "Todo created", data: todo })
    } catch (error) {
      res.status(400).json({ message: "Todo could not created", data: error })
    }
  },


  // front

  /*   const [data, setData] = useState({
      title: "body 1",
      body: "body 1",
      completed: true,
    })
  
    const updateData = "body 11111"
  
    axios.post("http://localhost:8080/todos/:todoId", {
      ...data,
      title: updateData
    }) */

  //PUT 
  async update(req, res) {
    try {
      const data = req.body
      const { todoId } = req.params

      const todo = await Todo.findByIdAndUpdate(todoId, data, { new: true })

      res.status(200).json({ message: "Todo updated", data: todo })
    } catch (error) {
      res.status(400).json({ message: "Todo could not updated", data: error })
    }
  },

  //DELETE
  async destroy(req, res) {
    try {
      const { todoId } = req.params

      const todo = await Todo.findByIdAndDelete(todoId)

      res.status(200).json({ message: "Todo deleted", data: todo })
    } catch (error) {
      res.status(400).json({ message: "Todo could not deleted", data: error })
    }
  }

}