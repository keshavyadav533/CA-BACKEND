const mongoose = require("mongoose") ;
const schema = new mongoose.Schema({
    Email : {
        type : String , 
        required : true 
    } , 
    Password : {
        type : String , 
        required : true 
    }
})

const model = mongoose.model("userModel" , schema) ;
module.exports = model 