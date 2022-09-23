const express = require("express");
const router = express.Router();
const { createSOS, getSOSes } = require("../controllers/sos.js");

router.post("/", createSOS);
router.get("/", getSOSes);

module.exports = router;
