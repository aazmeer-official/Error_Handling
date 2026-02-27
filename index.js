// BASIC REQUIREMENTS
const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError")


const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "access"){
        next();
    }else{
    console.log("Check Token")
    throw new ExpressError(401,"ACCESS NHI DENI")
    }
}

app.get("/api",checkToken,(req,res)=>{
    res.send("Dsata")
})

app.get("/",(req,res)=>{
    res.send("Response")
})

app.get("/error",(req,res)=>{
    abc = anv
});

// Custom Error

app.use((err,req,res,next)=>{
    console.log("------------ERROR-------------")
    let {status=500,message="Some Error Occurred"} = err;
    res.status(status).send(message)
})

app.listen(port,()=>{
    console.log("server is listening...")
})

