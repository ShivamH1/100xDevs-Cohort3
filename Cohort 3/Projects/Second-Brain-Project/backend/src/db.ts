import mongoose, { model, Schema } from "mongoose";

mongoose.connect(
    "mongodb+srv://admin:India%40123@100xdev.7gly1js.mongodb.net/brainly"
  );

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);
