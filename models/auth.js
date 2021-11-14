const mongoose = require("mongoose");

const authSchema= mongoose.Schema({
    uName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    cCode:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const auth= mongoose.model("auth",authSchema);

module.exports=auth