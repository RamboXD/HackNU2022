const mongoose = require("mongoose");

const SOSSchema = new mongoose.Schema({
  Latitude: { type: Number, required: false },
  Longitude: { type: Number, required: false },
  Altitude: { type: Number, required: false },
  Identifier: { type: Number, required: false },
  Timestamp: { type: Number, required: false },
  FloorLabel: { type: Number, required: false },
  HorizontalAccuracy: { type: Number, required: false },
  VerticalAccuracy: { type: Number, required: false },
  ConfidenceInLocationAccuracy: { type: Number, required: false },
  Activity: { type: String, required: false },
  dateCreated: { type: Date, default: new Date() },
});

module.exports = mongoose.model("SOS", SOSSchema);
