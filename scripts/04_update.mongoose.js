import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../db/connect.js";

async function run() {
  await connectDB();
  const db = mongoose.connection.db;

  const res = await db.collection("evenimente").updateOne(
    { nume: "Conferinta AI 2026" },
    { $set: { nume: "Conferinta AI 2026 (Updated)" } }
  );

  console.log("UPDATE -> matched:", res.matchedCount, "modified:", res.modifiedCount);
  await mongoose.connection.close();
}

run();
