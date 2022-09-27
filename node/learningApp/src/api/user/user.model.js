const { Schema, model, models } = require("mongoose");

const emailRegex = new RegExp("[a-zA-Z0-9]{5,}@[a-z]{3,5}.com")

const userSchema = new Schema(
  {
    rol: {
      type: String,
      required: true,
      enum: {
        values: ["admin", "superadmin", "client"],
        message: "Invalid rol"
      }
    },
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
        validator(value) {
          return models.user.findOne({ email: value })
            .then((user) => !user) //user === null = falsyValue
            .catch(() => false)
        },
        message: "Ya existe un usuario registrado con ese correo"
      }]
    },
    age: {
      type: Number,
      required: false,
      //min: [18, "Debes ser mayor a 18 años"],
      max: [70, "La edad máxima es 70"],
      validate: [
        {
          validator(value) {
            if (value < 18) {
              return false
            }
            return true
          },
          message: "No cumple"
        }
      ]
    },
    working: {
      type: Boolean,
      default: false
    },
    comments: {
      type: [{ type: Schema.Types.ObjectId, ref: "comment" }],
      required: false
    }
  },
  { timestamps: true }
);

const User = model("user", userSchema);

module.exports = User;
