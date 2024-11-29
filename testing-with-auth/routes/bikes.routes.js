const express = require("express");
const Bike = require("../models/Bikes.model");

const router = express.Router();

router.post(
  "/",
  /* async */ (req, res, next) => {
    const { brand, model, year, owner } = req.body;

    const newBike = {
      brand,
      model,
      year,
      owner,
    };

    /* try {
    const response = await Bike.create(newBike);

    res.json(response);
    } catch (error) {
        res.status(400).json({ message: "We couldn't create the bike" });
        } */

    Bike.create(newBike)
      .then((response) => {
        res.json(response);
      })
      .catch((error) => {
        res.status(400).json({ message: "We couldn't create the bike" });
      });
  }
);

module.exports = router;
