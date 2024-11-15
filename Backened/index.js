const express=require("express");
const app=express();
app.use("/",(req,res)=>{
    res.send("server is running.")
})

app.listen(3000,console.log("Server is running on PORT 3000"))