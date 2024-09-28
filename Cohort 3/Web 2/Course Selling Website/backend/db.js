const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:India%40123@100xdev.7gly1js.mongodb.net/coursera-app"
  )
  .then(() => {
    console.log("db connected");
  });

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

//Schema is a class so we need to initialize a object for it thats why -> (new Schema)
const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  creatorId: ObjectId,
});

const purchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
