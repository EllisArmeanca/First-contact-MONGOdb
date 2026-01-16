import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../db/connect.js";

async function run() {
  try {
    await connectDB();
    const db = mongoose.connection.db;

    const evenimente = await db
      .collection("evenimente")
      .find({})
      .project({
        nume: 1,
        data_inceput: 1,
        data_sfarsit: 1,
        id_grup: 1,
        id_locatie: 1,
        id_cazare: 1
      })
      .toArray();

    console.log("=== READ EVENIMENTE ===");
    console.log("Numar evenimente:", evenimente.length);

    evenimente.forEach((ev, idx) => {
      console.log(
        `${idx + 1}. ${ev.nume} | ${ev.data_inceput.toISOString().slice(0,10)} -> ${ev.data_sfarsit.toISOString().slice(0,10)}`
      );
    });

  } catch (err) {
    console.error("Eroare la READ evenimente:", err.message);
  } finally {
    await mongoose.connection.close();
  }
}

run();