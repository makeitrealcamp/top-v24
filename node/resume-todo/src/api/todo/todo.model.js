const { Schema, model } = require("mongoose")


const todoSchema = new Schema(
  {
    title: {
      type: String,
      require: [true, "El titulo es requerido"],
      minlength: [1, "Titulo muy corto"],
      maxlength: [15, "Titulo muy largo"]
    },
    body: {
      type: String,
      require: false,
      minlength: [1, "Descripción muy corta"],
      maxlength: [30, "Descripción muy larga"]
    },
    completed: {
      type: Boolean,
      require: false,
      default: false
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      require: true
    },
  }, {
  timestamps: true
}
)

const Todo = model("todo", todoSchema)

module.exports = Todo
