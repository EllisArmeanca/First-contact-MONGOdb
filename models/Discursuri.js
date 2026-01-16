const mongoose = require("mongoose");
const { Schema } = mongoose;

const DiscursuriSchema = new Schema(
  {
    titlu: { type: String, required: true, trim: true },
    durata: { type: Number, required: true, min: 1 }
  },
  { collection: "discursuri", timestamps: true }
);

module.exports = mongoose.model("Discursuri", DiscursuriSchema);
