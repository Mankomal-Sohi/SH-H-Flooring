import mongoose from "mongoose";
const Schema = mongoose.Schema;
const infoSchema = new Schema({
  id: Number,
  FirstName: String,
  LastName: String,
  Email: String,
  PhoneNumber: Number,
  PostalCode: String,
  Comments: String,
});

export default mongoose.model("Info", infoSchema);
