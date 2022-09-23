const mongoose = require("mongoose");
const SOS = require("../models/Sos.js");
const createSOS = async (req, res) => {
  const {
    Latitude,
    Longitude,
    Altitude,
    Identifier,
    Timestamp,
    FloorLabel,
    HorizontalAccuracy,
    VerticalAccuracy,
    ConfidenceInLocationAccuracy,
    Activity,
  } = req.body;
  const sos = new SOS({
    Latitude,
    Longitude,
    Altitude,
    Identifier,
    Timestamp,
    FloorLabel,
    HorizontalAccuracy,
    VerticalAccuracy,
    ConfidenceInLocationAccuracy,
    Activity,
    dateCreated: new Date().toISOString(),
  });

  try {
    const newSos = await sos.save();
    res.status(201).json(newSos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getSOSes = async (req, res) => {
  try {
    const soses = await SOS.find();
    res.status(200).send(soses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createSOS,
  getSOSes,
};
