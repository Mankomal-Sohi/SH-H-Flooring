import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
  id: Number,
  firstName: String,
  lastName: String,
  emailAddress: String,
  country: String,
  streetaddress: String,
  PhoneNumber: Number,
  PostalCode: String,
  Comments: String,
});

export default mongoose.model("Users", userSchema);
