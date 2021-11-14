require('dotenv').config()
const express = require('express');
const app= express();
const db=require("./util/helpers/db");
const contactRoutes=require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");
const cors=require("cors");

app.use(express.json())
app.use(cors())

app.use("/auth", authRoutes);
app.use("/contacts",contactRoutes);

// app.use('*', (req,res,next)=>{
//     res.send("<h1>Hello World</h1>");
// });


app.listen(4000, () => {
    console.log(`Server started on port`);
});