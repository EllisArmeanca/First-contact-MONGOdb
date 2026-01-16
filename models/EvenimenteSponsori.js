const mongoose = require("mongoose");
const { Schema } = mongoose;

const EvenimenteSponsoriSchema = new Schema(
  {
    id_eveniment: { type: Schema.Types.ObjectId, required: true }, 
    id_sponsor: { type: Schema.Types.ObjectId, required: true },  
    suma: { type: Number, required: true, min: 0 },
  },
  {
    collection: "evenimente_sponsori",
    timestamps: true,
  }
);


EvenimenteSponsoriSchema.index({ id_eveniment: 1, id_sponsor: 1 }, { unique: true });

module.exports = mongoose.model("EvenimenteSponsori", EvenimenteSponsoriSchema);
