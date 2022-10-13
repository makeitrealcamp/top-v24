const { Schema, model, models } = require("mongoose");

const emailRegex = new RegExp("[a-zA-Z0-9]{5,}@[a-z]{3,5}.com")

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El campo nombre es requerido"],
      minlength: [4, "El nombre es muy corto"],
      maxlength: [10, "El nombre es muy largo"]
    },
    email: {
      type: String,
      required: true,
      match: [emailRegex, "El email no es valido"],
      validate: [{
        // value = test@test.com
        // El correo ya existe ? 
        // validator ---> debe retornar
        //    true ---> validación si pasa
        //    false ---> validación no pasa 
        async validator(value) {
          try {
            const user = await models.user.findOne({ email: value })
            return !user
          } catch (error) {
            if (error) {
              return false
            }
          }
        },
        message: "Ya existe un usuario registrado con ese correo"
      }]
    },
    comments: {
      type: [{ type: Schema.Types.ObjectId, ref: "comment" }],
      required: false
    },
    todos: {
      type: [{ type: Schema.Types.ObjectId, ref: "todo" }],
      required: false
    }
  },
  { timestamps: true }
);

const User = model("user", userSchema);

module.exports = User;
