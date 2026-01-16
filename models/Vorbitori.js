const mongoose = require("mongoose");
const { Schema } = mongoose;

const VorbitoriSchema = new Schema(
  {
    nume: { type: String, required: true, trim: true },
    prenume: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    telefon: { type: String, required: true, trim: true }
  },
  { collection: "vorbitori", timestamps: true }
);

module.exports = mongoose.model("Vorbitori", VorbitoriSchema);
