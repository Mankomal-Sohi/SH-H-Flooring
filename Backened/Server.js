import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import Users from "./Models/user.js";
import Info from "./Models/info.js";
import dotenv from "dotenv";
//load env variables
dotenv.config({ path: "./.env" });
console.log("Mongo URI:", process.env.MONGO_URI);

console.log("Loaded environment variables:", process.env); // This will print all loaded env vars

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: ["https://sh-h-flooring.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// Configure body-parser to handle post requests
app.use(bodyParser.json());

//db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(`DB connection error: ${err.message}`));

app.get("/", (req, res) => {
  res.send("thank you for submiting");
});

// Handle form submissions and log them to the console
app.post("/contact", async (req, res) => {
  try {
    const user = new Users(req.body);
    console.log("Creating User", req.body);

    const toDB = await user.save(); // Using await instead of callback
    res.status(200).json({
      user: toDB,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
});
// app.post("/", (req, res) => {
//   console.log(`Received Information:
//     First Name: ${req.body.FirstName},
//     Last Name:${req.body.LastName},
//     Email Address: ${req.body.email},
//     Phone: ${req.body.PshoneNumber}
//     Postal Code:${req.body.PostalCode}
//     Comments: ${req.body.Comments}
//   `);
//   res.json(req.body);
// });
app.get("/info-form", (req, res) => {
  res.send("thank you for submiting");
});

app.post("/info-form", async (req, res) => {
  try {
    const infoUsers = new Info(req.body);
    console.log("Creating Info users", req.body);

    const toDB = await infoUsers.save();
    res.status(200).json({
      infoUsers: toDB,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
});

// Start server on specified PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
