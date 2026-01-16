import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../db/connect.js";

async function run() {
  await connectDB();
  const db = mongoose.connection.db;

  const result = await db.collection("evenimente").aggregate([
    {
      $lookup: {
        from: "grupuri",
        localField: "id_grup",
        foreignField: "_id",
        as: "grup"
      }
    },
    { $unwind: "$grup" },
    {
      $project: {
        nume: 1,
        "grup.nume": 1
      }
    }
  ]).toArray();

  console.log("AGGREGATION RESULT:", result);
  await mongoose.connection.close();
}

run();
