const express = require("express");
const app = express();
require("dotenv").config()
app.use(express.json());

const PORT = process.env.PORT || 8500
app.get("/",(req,res)=>{

    res.send("home page")
})


app.listen(PORT,()=>{
    console.log("listening on : "+PORT)
})