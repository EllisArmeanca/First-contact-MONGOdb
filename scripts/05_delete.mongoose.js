import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../db/connect.js";

async function run() {
  await connectDB();
  const db = mongoose.connection.db;

  const res = await db.collection("evenimente").deleteOne({
    nume: /Updated/
  });

  console.log("DELETE -> deleted:", res.deletedCount);
  await mongoose.connection.close();
}

run();
