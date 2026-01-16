const mongoose = require("mongoose");
const { Schema } = mongoose;

const VorbitoriDiscursuriEvenimenteSchema = new Schema(
  {
    id_eveniment: { type: Schema.Types.ObjectId, required: true }, 
    id_vorbitor: { type: Schema.Types.ObjectId, required: true },  
    id_discurs: { type: Schema.Types.ObjectId, required: true },  

    start_time: { type: Date, required: false },
    sala: { type: String, required: false, trim: true },
  },
  {
    collection: "vorbitori_discursuri_evenimente",
    timestamps: true,
  }
);

VorbitoriDiscursuriEvenimenteSchema.index(
  { id_eveniment: 1, id_vorbitor: 1, id_discurs: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "VorbitoriDiscursuriEvenimente",
  VorbitoriDiscursuriEvenimenteSchema
);
