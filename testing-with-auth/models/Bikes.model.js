const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bikeSchema = new Schema({
  brand: {
    type: String,
    enum: ["Yamaha", "Honda", "Kawasaki"],
    required: [true, "Brand is required"],
  },
  model: { type: String, required: [true, "Model is required"] },
  year: Number,
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

const Bike = mongoose.model("bike", bikeSchema);

module.exports = Bike;
