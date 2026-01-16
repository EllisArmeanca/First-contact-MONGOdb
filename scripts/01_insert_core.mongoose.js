import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../db/connect.js"; 

async function run() {
  try {
    await connectDB();
    const db = mongoose.connection.db;

    const grupuriRes = await db.collection("grupuri").insertMany([
      { nume: "AI & Data", oras: "Bucuresti" },
      { nume: "Cloud & DevOps", oras: "Cluj-Napoca" },
      { nume: "Security", oras: "Timisoara" }
    ]);

    const locatiiRes = await db.collection("locatii").insertMany([
      { nume: "Sala Palatului", capacitate: 2000 },
      { nume: "BT Arena", capacitate: 6000 },
      { nume: "Conference Hub", capacitate: 300 }
    ]);

    const cazariRes = await db.collection("cazari").insertMany([
      { tip: "Hotel", adresa: "Str. Victoriei 10", numar_locuri: 200 },
      { tip: "Hostel", adresa: "Bd. Unirii 25", numar_locuri: 80 },
      { tip: "Apartment", adresa: "Str. Lalelelor 5", numar_locuri: 20 }
    ]);

    const sponsoriRes = await db.collection("sponsori").insertMany([
      { nume: "TechCorp" },
      { nume: "DataWorks" },
      { nume: "SecureIT" }
    ]);

    const vorbitoriRes = await db.collection("vorbitori").insertMany([
      { nume: "Popescu", prenume: "Ana", email: "ana.popescu@example.com", telefon: "+40 723 111 222" },
      { nume: "Ionescu", prenume: "Mihai", email: "mihai.ionescu@example.com", telefon: "+40 730 333 444" },
      { nume: "Stan", prenume: "Andrei", email: "andrei.stan@example.com", telefon: "+40 744 555 666" }
    ]);

    const discursuriRes = await db.collection("discursuri").insertMany([
      { titlu: "Introducere in Machine Learning", durata: 45 },
      { titlu: "MongoDB Aggregations in practica", durata: 40 },
      { titlu: "Security Basics pentru aplicatii web", durata: 35 }
    ]);

    console.log("=== INSERT CORE DONE ===");
    console.log(
      `grupuri: ${grupuriRes.insertedCount}, locatii: ${locatiiRes.insertedCount}, cazari: ${cazariRes.insertedCount}`
    );
    console.log(
      `sponsori: ${sponsoriRes.insertedCount}, vorbitori: ${vorbitoriRes.insertedCount}, discursuri: ${discursuriRes.insertedCount}`
    );

  } catch (err) {
    console.error("Eroare in 01_insert_core.mongoose:", err);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
}

run();
