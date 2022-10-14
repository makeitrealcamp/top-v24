import { model, Schema, Document } from "mongoose"
import { IUser } from "../user/user.model"

export interface ITask extends Document {
  title: string
  description: string
  user: IUser["_id"]
}


const taskSchema = new Schema({
  title: String,
  description: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
}, {
  timestamps: true
})

export default model<ITask>("task", taskSchema)