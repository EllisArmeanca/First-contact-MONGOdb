const mongoose = require("mongoose");
const { Schema } = mongoose;

const FacturiSchema = new Schema(
  {
    id_eveniment: { type: Schema.Types.ObjectId, required: true },
    suma: { type: Number, required: true, min: 0 },
    descriere: { type: String, required: true, trim: true }
  },
  { collection: "facturi", timestamps: true }
);

module.exports = mongoose.model("Facturi", FacturiSchema);
