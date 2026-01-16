import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../db/connect.js";
import Evenimente from "../models/Evenimente.js"; // ajusteaza path-ul

async function run() {
  try {
    await connectDB();

    const evenimente = await Evenimente.find({})
      .select("nume data_inceput data_sfarsit id_grup id_locatie id_cazare")
      .lean();

    console.log("Numar evenimente:", evenimente.length);
    console.log(evenimente.slice(0, 5));
  } finally {
    await mongoose.connection.close();
  }
}

run();
