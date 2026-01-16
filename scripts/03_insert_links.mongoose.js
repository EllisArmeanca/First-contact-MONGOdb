import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../db/connect.js";

async function run() {
  await connectDB();
  const db = mongoose.connection.db;

  const eveniment = await db.collection("evenimente").findOne();
  const vorbitor = await db.collection("vorbitori").findOne();
  const discurs = await db.collection("discursuri").findOne();

  await db.collection("evenimente").updateOne(
    { _id: eveniment._id },
    {
      $push: {
        program: {
          id_vorbitor: vorbitor._id,
          id_discurs: discurs._id
        }
      }
    }
  );

  console.log("=== INSERT LINKS DONE ===");
  await mongoose.connection.close();
}

run();
