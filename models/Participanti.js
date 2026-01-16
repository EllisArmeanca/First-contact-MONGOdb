const mongoose = require("mongoose");
const { Schema } = mongoose;

const ParticipantiSchema = new Schema(
  {
    id_eveniment: { type: Schema.Types.ObjectId, required: true }, 
    nume: { type: String, required: true, trim: true },
    prenume: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true }
  },
  { collection: "participanti", timestamps: true }
);

module.exports = mongoose.model("Participanti", ParticipantiSchema);
