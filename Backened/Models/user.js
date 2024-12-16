const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  id: Number,
  FirstName: String,
  LastName: String,
  email: String,
  PhoneNumber: Number,
  PostalCode: String,
  Comments: String,
});

module.exports= mongoose.model("Users", userSchema);