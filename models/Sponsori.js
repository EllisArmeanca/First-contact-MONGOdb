const mongoose = require("mongoose");
const { Schema } = mongoose;

const SponsoriSchema = new Schema(
  {
    nume: { type: String, required: true, trim: true }
  },
  { collection: "sponsori", timestamps: true }
);

module.exports = mongoose.model("Sponsori", SponsoriSchema);
