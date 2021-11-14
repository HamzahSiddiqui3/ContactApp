const express = require("express");
const router=express.Router();
const contacts=require("./../models/contact");
const phoneNumber = require("./../models/phoneNumber");
const address = require("./../models/address")
const pno=require("./../models/phoneNumber");
const countryCode=require("./../util/helpers/countryCode.json");
const mongoose = require("mongoose");
const checkAuth = require("../middleware/checkAuth");
const { addContact,addPhoneNumber,savePhoneNumber, saveAddress } =require("./../controllers/contacts")

router.post("/addContact",addContact)

router.get("/getContact/:id",addPhoneNumber)

router.post('/saveContact',savePhoneNumber);
router.post('/saveAddress',saveAddress);

router.get('/listContact', (req,res,next)=>{
    res.send("<h1>Contact List</h1>");
});

router.get('/viewContact/:contactId', (req,res,next)=>{
    const contactId=req.params.contactId;
    console.log(contactId);
    res.send("<h1>View Contact</h1>");
});

router.put('/editContact/:contactId', (req,res,next)=>{
    
    const contactId=req.params.contactId;
    console.log(contactId);
    res.send("<h1>Edit Contact</h1>");
});

router.delete('/deleteContact/:contactId', (req,res,next)=>{
    const contactId=req.params.contactId;
    console.log(contactId);
    res.send("<h1>Delete Contact</h1>");
});

router.get('/searchContact/:contactName', (req, res,next) => {
    const contactName=req.params.contactName;
    console.log(contactName)
    res.send("<h1>Search Contact</h1>");
});

router.get('/sortContact/:order', (req, res,next) => {
    const order=req.params.order;
    console.log(order)
    if (order==="asc"){
        res.send("sorted in ascending order");
    }else{
        res.send("sorted in decending order");
    }
});


module.exports=router;