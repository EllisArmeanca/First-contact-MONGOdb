const mongoose = require("mongoose");
const { Schema } = mongoose;

const CazariSchema = new Schema(
  {
    tip: { type: String, required: true, trim: true },
    adresa: { type: String, required: true, trim: true },
    numar_locuri: { type: Number, required: true, min: 0 }
  },
  { collection: "cazari", timestamps: true }
);

module.exports = mongoose.model("Cazari", CazariSchema);
