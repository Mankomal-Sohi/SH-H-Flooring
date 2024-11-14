const mongoose=require("mongoose");
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

module.exports= mongoose.model("Users", userSchema);
