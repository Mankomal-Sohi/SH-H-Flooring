const express= require("express");
const bodyParser= require("body-parser");
const cors=require("cors");
const mongoose=require("mongoose")

const dotenv=require("dotenv")
const Contact= require("./Models/contact");
const Info=require("./Models/info");
const EstimateRequest=require("./Models/estimate");
const app=express();
const adminRoute=require("./router/admin-router")

//load env variables
dotenv.config({ path: "./.env" });
console.log("Mongo URI:", process.env.MONGO_URI);


app.use(
  cors({
    origin: ["https://sh-h-flooringfrontened.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
// Configure body-parser to handle post requests
app.use(bodyParser.json());

// connect db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(`DB connection error: ${err.message}`));

app.get("/",(req,res)=>{
    res.json("server is running.")
})

app.post("/contact", async (req, res) => {
  console.log("Received contact data:", req.body);
  try {
    const contact = new Contact(req.body);
    console.log("Creating User", req.body);

    const toDB = await contact.save(); // Using await instead of callback
    res.status(200).json({
      contact: toDB,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
});

app.get("/info-form", (req, res) => {
  res.send("thank you for submiting");
});

app.post("/info-form", async (req, res) => {
  console.log("Received contact data:", req.body);
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


app.post("/estimate-form", async (req, res) => {
  console.log("Received contact data:", req.body);
  try {
    const reqEstimate = new EstimateRequest(req.body);
    console.log("Requesting Estimate", req.body);

    const toDB = await reqEstimate.save();
    res.status(200).json({
      reqEstimate: toDB,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
});

// define admin route

app.use("/admin",adminRoute);

app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
})