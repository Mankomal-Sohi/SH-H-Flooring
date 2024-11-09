import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
  id: Number,
  FirstName: String,
  LastName: String,
  Email: String,
  PhoneNumber: Number,
  PostalCode: String,
  Comments: String,
});

export default mongoose.model("Users", userSchema);
