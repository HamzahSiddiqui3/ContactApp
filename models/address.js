const mongoose=require("mongoose");

const addressSchema=mongoose.Schema({
    type:{
    type:String,
    required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'contact',
        required:true
    },
    streetName:{
        type:String,
        required:true
    },
    streetNumber:{
        type:Number,
        required:true
    },
    apartmentNumber:{
        type:Number
    },
    city:{
        type:String,
        required:true
    }
})


const address=mongoose.model("address",addressSchema)

module.exports=address