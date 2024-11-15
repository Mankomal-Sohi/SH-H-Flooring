const express= require("express");
const bodyParser= require("body-parser");
const cors=require("cors");
const mongoose=require("mongoose")

const dotenv=require("dotenv")
const Users= require("../Models/user.js");
const app=express();

//load env variables
dotenv.config({ path: "./.env" });
console.log("Mongo URI:", process.env.MONGO_URI);


app.use(
  cors({
    origin: ["https://sh-h-flooringfrontened.vercel.app/"],
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

app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
})