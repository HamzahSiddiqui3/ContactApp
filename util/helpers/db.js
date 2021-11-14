const mongoose  = require("mongoose");
mongoose.connect(process.env.MONGO_DB_URL).then((res)=>{
    console.log("connected to db")
}).catch((e)=>{
    console.log(e)
})

module.exports=mongoose;