import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../db/connect.js";

async function run() {
  try {
    await connectDB();
    const db = mongoose.connection.db;

    const grup = await db.collection("grupuri").findOne();
    const locatie = await db.collection("locatii").findOne();
    const cazare = await db.collection("cazari").findOne();

    const res = await db.collection("evenimente").insertMany([
      {
        nume: "Conferinta AI 2026",
        data_inceput: new Date("2026-06-01"),
        data_sfarsit: new Date("2026-06-02"),
        id_grup: grup._id,
        id_locatie: locatie._id,
        id_cazare: cazare._id
      }
    ]);

    console.log("=== INSERT EVENIMENTE REF DONE ===", res.insertedCount);
  } finally {
    await mongoose.connection.close();
  }
}

run();
