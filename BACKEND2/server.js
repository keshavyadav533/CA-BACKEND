const express = require("express") ;
const mongoose = require("mongoose") ;
const model = require("./schema")
require("dotenv").config() ;
const app = express() ;

const PORT = 9090 ;

app.post("/sendData" , async(req , res)=>{
    try{
        const {Email , Password} = req.body ;
        if (!Email ){
            res.send("Email cannot be empty.")
        }
        if (!Password){
            res.send("Password cannot be empty.")
        }
        const createUser = new model({Email , Password}) ;
        await createUser.save() ;
        res.send(createUser) ;
    }
    catch(err){
        return res.status(500).json({Message : "Internal server error"})
    }
})
app.use(express.json()) ;
app.listen(PORT , ()=>{
    console.log(`Server is running at Port ${PORT}`) ;
})

