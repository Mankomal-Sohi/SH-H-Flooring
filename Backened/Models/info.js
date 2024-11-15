const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const infoSchema = new Schema({
  id: Number,
  firstName: String,
  lastName: String,
  emailAddress: String,
  PhoneNumber: Number,
  postalCode: String,
  Comments: String,
});

module.exports= mongoose.model("Info", infoSchema);
