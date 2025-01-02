import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://admin:India%40123@100xdev.7gly1js.mongodb.net/brainly")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
  type: String,
  link : String,
  title : String,
  tags : [{ type : mongoose.Types.ObjectId, ref : 'Tags'}],
  userId : { type : mongoose.Types.ObjectId, ref : 'User'}
})

export const ContentModel = model("Content", ContentSchema);