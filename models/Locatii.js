const mongoose = require("mongoose");
const { Schema } = mongoose;

const LocatiiSchema = new Schema(
  {
    nume: { type: String, required: true, trim: true },
    capacitate: { type: Number, required: true, min: 1 }
  },
  { collection: "locatii", timestamps: true }
);

module.exports = mongoose.model("Locatii", LocatiiSchema);
