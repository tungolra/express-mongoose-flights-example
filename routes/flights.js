const express = require("express");
const router = express.Router();
const flightsCtrl = require("../controllers/flights");

router.get("/", flightsCtrl.index);
router.get("/new", flightsCtrl.newFlight);
router.get("/:id", flightsCtrl.show);
router.post("/", flightsCtrl.create);
router.delete("/:id", flightsCtrl.deleteFlight);

module.exports = router;
