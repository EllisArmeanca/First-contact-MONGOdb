const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecenziiSchema = new Schema(
  {
    id_eveniment: { type: Schema.Types.ObjectId, required: true },   
    id_participant: { type: Schema.Types.ObjectId, required: true },  
    id_discurs: { type: Schema.Types.ObjectId, required: true },     

    rating: { type: Number, required: true, min: 1, max: 5 },
    comentariu: { type: String, required: true, trim: true, maxlength: 500 },
  },
  {
    collection: "recenzii",
    timestamps: true,
  }
);

RecenziiSchema.index(
  { id_eveniment: 1, id_participant: 1, id_discurs: 1 },
  { unique: true }
);

module.exports = mongoose.model("Recenzii", RecenziiSchema);
