// BASIC REQUIREMENTS
const express = require("express");
const app = express();
const port = 8080;




app.get("/",(req,res)=>{
    res.send("Response")
})

app.get("/error",(req,res)=>{
    abc = anv
});

// Custom Error

app.use((err,req,res,next)=>{
    console.log("------------ERROR-------------")
    next(err)
})

app.listen(port,()=>{
    console.log("server is listening...")
})

