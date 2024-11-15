const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const estimateRequestSchema = new Schema({
  id: Number,
  firstName: String,
  lastName: String,
  emailAddress: String,
  country:String,
  streetAddress:String,
  city:String,
  state:String,
  postalCode: String,
  prefferedDate:Date,
  prefferedTime:String,
  productsInterested:[String],
  comments: String,
  keepUpdated:Boolean

  
});
module.exports = mongoose.model("EstimateRequest", estimateRequestSchema);
