// require("dotenv").config();
// const { connectDB } = require("./db/connect");

// const EvenimenteRef = require("./models/EvenimenteRef");
// const EvenimenteEmb = require("./models/EvenimenteEmb");

// async function main() {
//   try {
//     await connectDB();

//     console.log("App is running");

//     const evRef = await EvenimenteRef.findOne();
//     console.log("EvenimenteRef:", evRef?.nume);

//     const evEmb = await EvenimenteEmb.findOne();
//     console.log("EvenimenteEmb:", evEmb?.nume);

//   } catch (err) {
//     console.error("Error:", err);
//     process.exit(1);
//   }
// }

// main();
