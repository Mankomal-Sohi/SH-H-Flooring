const express= require("express");
const bodyParser= require("body-parser");
const cors=require("cors");
const mongoose=require("mongoose")

const dotenv=require("dotenv")
const Contact= require("./Models/contact");
const Info=require("./Models/info");
const EstimateRequest=require("./Models/estimate");
const app=express();

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
 .catch((err) => {
    console.log(`DB connection error: ${err.message}`);
    process.exit(1);  // Exit the process if the connection fails
  });

app.get("/",(req,res)=>{
    res.json("server is running.")
})

app.get("/contact",(req,res)=>{
    res.json("Thank you for submitting")
})

app.post("/contact", async (req, res) => {
  console.log("Received contact data:", req.body);
  try {
    const contact = new Contact(req.body);
    console.log("Creating User", req.body);

    const toDB = await contact.save(); // Using await instead of callback
    console.log("User saved to DB:", toDB); 
    res.status(200).json({
      contact: toDB,
    });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(400).json({
      error: err,
    });
  }
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
   console.error("Error saving estimate:", err);
    res.status(400).json({
      error: err.message,
    });
  }
});

app.get('/admin/contact', async (req, res) => {
  try {
    const contact = await Contact.find();
    res.json(contact);
  } catch (error) {
    res.status(500).send('Error fetching contact data');
  }
});

app.get('/admin/estimates', async (req, res) => {
  try {
    const estimates = await EstimateRequest.find();
    res.json(estimates);
  } catch (error) {
    res.status(500).send('Error fetching estimates');
  }
});

app.get('/admin/info', async (req, res) => {
  try {
    const info = await Info.find();
    res.json(info);
  } catch (error) {
    res.status(500).send('Error fetching info');
  }
});

app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
})