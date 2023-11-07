
require('dotenv').config()

const express=require("express");
const app=express();
const port=4000;

app.get("/",(req,res)=>{
    res.send("hey there!")
})

app.get("/mytwitter",(req,res)=>{
    res.send("twitter tweets")
})

app.get("/testRoutes",(req,res)=>{
    res.send("testing")
})

app.get("/login",(req,res)=>{
    res.send('<h1> Please login</h1>');
})

app.get(("/youtube",(req,res)=>{
    res.send("<h2>Pls subscribe</h2>")
}))
app.listen(process.env.PORT,()=>{
    console.log(` Example app listening on port ${port}`)
})

