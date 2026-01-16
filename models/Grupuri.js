const mongoose = require("mongoose");
const { Schema } = mongoose;

const GrupuriSchema = new Schema(
  {
    nume: { type: String, required: true, trim: true },
    oras: { type: String, required: true, trim: true }
  },
  { collection: "grupuri", timestamps: true }
);

module.exports = mongoose.model("Grupuri", GrupuriSchema);
