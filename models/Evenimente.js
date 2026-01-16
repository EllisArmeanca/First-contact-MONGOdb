const mongoose = require("mongoose");
const { Schema } = mongoose;

const EvenimenteSchema = new Schema(
  {
    id_grup: { type: Schema.Types.ObjectId, ref: "Grupuri", required: true },
    id_locatie: { type: Schema.Types.ObjectId, ref: "Locatii", required: true },
    id_cazare: { type: Schema.Types.ObjectId, ref: "Cazari", required: true },

    nume: { type: String, required: true, trim: true },
    data_inceput: { type: Date, required: true },
    data_sfarsit: { type: Date, required: true },

    status: {
      type: String,
      enum: ["Draft", "Open", "Confirmed", "Finished", "Cancelled"],
      default: "Draft",
    },
  },
  { collection: "evenimente", timestamps: true }
);

EvenimenteSchema.pre("validate", function (next) {
  if (this.data_sfarsit < this.data_inceput) {
    return next(new Error("data_sfarsit trebuie sa fie dupa data_inceput"));
  }
  next();
});

module.exports = mongoose.model("Evenimente", EvenimenteSchema);
