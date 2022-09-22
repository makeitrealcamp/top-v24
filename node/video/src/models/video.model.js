const { Schema, model } = require("mongoose")


// Schema recibe dos argumentos
// 1 - Objeto que es la estructura del schema
// 2 - Objeto de configuraciones

const videoSchema = new Schema(
  {
    title: String,
    url: String,
    description: String,
    isCopy: Boolean,
    published: Date,
    user: {
      type: Schema.Types.ObjectId, // Usuario con id único
      ref: "User",
      require: true
    }
  }, {
  timestamps: true
}
)

const Video = model("video", videoSchema)

module.exports = Video;