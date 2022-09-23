const mongoose = require("mongoose");

const SOSSchema = new mongoose.Schema({
  Latitude: { type: Number, required: true },
  Longitude: { type: Number, required: true },
  Altitude: { type: Number, required: true },
  Identifier: { type: Number, required: true },
  Timestamp: { type: Number, required: true },
  FloorLabel: { type: Number, required: true },
  HorizontalAccuracy: { type: Number, required: true },
  VerticalAccuracy: { type: Number, required: true },
  ConfidenceInLocationAccuracy: { type: Number, required: true },
  Activity: { type: String, required: true },
  dateCreated: { type: Date, default: new Date() },
});

module.exports = mongoose.model("SOS", SOSSchema);
