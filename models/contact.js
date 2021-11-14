const mongoose=require("mongoose");

const contactSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    middleName:{
        type:String
    },
    addressList:{
        type:Array,
        required:true
    },
    pno_list:{
        type:Array,
        required:true
    }
})


const contact=mongoose.model("contact",contactSchema)

module.exports=contact