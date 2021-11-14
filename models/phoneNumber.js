const mongoose=require("mongoose");

const phoneNumberSchema=mongoose.Schema({
    type:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'contact',
        required:true
    },
    countryCode:{
        type:String,
        required:true
    },
    p_number:{
        type:String,
        required:true
    }
})


const phoneNumber=mongoose.model("phoneNumber",phoneNumberSchema)

module.exports=phoneNumber