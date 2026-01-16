const mongoose = require("mongoose");
const { Schema } = mongoose;

const EvenimenteEmbSchema = new Schema(
  {
    nume: { type: String, required: true, trim: true },
    data_inceput: { type: Date, required: true },
    data_sfarsit: { type: Date, required: true },

    // Embedded snapshots 
    grup: {
      id_grup: { type: Schema.Types.ObjectId, required: true },
      nume: { type: String, required: true },
      oras: { type: String, required: true },
    },

    locatie: {
      id_locatie: { type: Schema.Types.ObjectId, required: true },
      nume: { type: String, required: true },
      capacitate: { type: Number, required: true, min: 1 },
    },

    cazare: {
      id_cazare: { type: Schema.Types.ObjectId, required: true },
      tip: { type: String, required: true },
      adresa: { type: String, required: true },
      numar_locuri: { type: Number, required: true, min: 0 },
    },

    facturi: [
      {
        suma: { type: Number, required: true, min: 0 },
        descriere: { type: String, required: true },
      },
    ],

    sponsori: [
      {
        id_sponsor: { type: Schema.Types.ObjectId, required: true },
        nume: { type: String, required: true },
        suma: { type: Number, required: true, min: 0 },
      },
    ],

    program: [
      {
        id_vorbitor: { type: Schema.Types.ObjectId, required: true },
        nume: { type: String, required: true },
        prenume: { type: String, required: true },
        email: { type: String, required: true },

        id_discurs: { type: Schema.Types.ObjectId, required: true },
        titlu: { type: String, required: true },
        durata: { type: Number, required: true, min: 1 },
      },
    ],

    stats: {
      nr_participanti: { type: Number, default: 0, min: 0 },
      nr_recenzii: { type: Number, default: 0, min: 0 },
      rating_mediu: { type: Number, default: 0, min: 0, max: 5 },
    },

    status: {
      type: String,
      enum: ["Draft", "Open", "Confirmed", "Finished", "Cancelled"],
      default: "Draft",
    },
  },
  {
    collection: "evenimente_embedded",
    timestamps: true,
  }
);

EvenimenteEmbSchema.pre("validate", function (next) {
  if (this.data_sfarsit < this.data_inceput) {
    return next(new Error("data_sfarsit trebuie sa fie dupa data_inceput"));
  }
  next();
});

module.exports = mongoose.model("EvenimenteEmb", EvenimenteEmbSchema);
