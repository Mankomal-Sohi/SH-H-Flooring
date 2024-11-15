const mongoose = require("mongoose");

const estimateRequestSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    trim: true
  },
  country: {
    type: String,
    enum: ["United States", "Canada", "Mexico"],
    required: true
  },
  streetaddress: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  state: {
    type: String,
    trim: true
  },
  postalCode: {
    type: String,
    required: true,
    trim: true
  },
  preferredDate: {
    type: Date
  },
  preferredTime: {
    type:String,
    enum: ["Morning", "Afternoon", "Evening"]
  },
  productsInterested: {
    type: [String],
    enum: [
      "Carpet", 
      "Carpet Tile", 
      "Cork", 
      "Glass Tile", 
      "Hardwood", 
      "Kitchen And Bath", 
      "Laminate", 
      "Metal Tile"
    ]
  },
  comments: {
    type: String,
    trim: true
  },
  keepUpdated: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("EstimateRequest", estimateRequestSchema);
