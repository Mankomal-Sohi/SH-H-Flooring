import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import Users from "./Models/user.js";
import dotenv from "dotenv";
//load env variables
dotenv.config({ path: "./.env" });
console.log("Mongo URI:", process.env.MONGO_URI);

console.log("Loaded environment variables:", process.env); // This will print all loaded env vars

const app = express();
const PORT = 3000;
app.use(cors());
// Configure body-parser to handle post requests
app.use(bodyParser.json());

//db connection
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

app.get("/", (req, res) => {
  res.send("thank you for submiting");
});

// Handle form submissions and log them to the console
app.post("/", (req, res) => {
  const user = new Users(req.body);
  console.log("Creating User", req.body);
  user.save((err, toDB) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      user: toDB,
    });
  });
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

// Start server on specified PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
