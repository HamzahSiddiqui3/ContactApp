const contacts=require("./../models/contact");
const phoneNumber=require("./../models/phoneNumber")
const address=require("../models/address")
exports.addContact=async(req,res,next)=>{
    try {
        console.log(req.body)
        const {
            fname,
            mname,
            lname,
            pno_list
            // addressType,
            // streetName,
            // streetNum,
            // streetApt,
            // country,
            // state,
            // city
        }=req.body;
        const addContact=new contacts({
            firstName:fname,
            lastName:lname,
            middleName:mname,
            pno_list:pno_list
        })
        const savedContact=await addContact.save();
        res.status(201).json({
            message:"Contact saved to contact list",
            userId:savedContact._id
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Contact not saved to contact list",
            err:error
        })
    }
}

exports.addPhoneNumber=async(req,res,next)=>{
    try {
        console.log(req.params.id)
        const fetchedNo=await contacts.findById({_id:req.params.id});
        res.status(200).json({
            fetchedNo
        });
    } catch (error) {
        console.log(error)
    }
}



exports.savePhoneNumber=async(req,res,next)=>{
    try {        
        const {type,cCode,pno,userId}=req.body;
        const savedNumber=new phoneNumber({
            type:type,
            userId:userId,
            countryCode:cCode,
            p_number:pno
        })
        const number=await savedNumber.save();
        res.status(201).json({
            message:"phone number saved",
            number:number
        });
    } catch (error) {
        console.log(error)
    }
}


exports.addAddress=async(req,res,next)=>{
    try {
        const fetchedAddress=await contacts.findById({_id:'6162e5d3d87938eca003113d'});
        const fetchedcCode=await phoneNumber.find({userId:mongoose.Types.ObjectId('6162e5d3d87938eca003113d')});
        res.status(200).json({
            fetchedAddress,
            fetchedcCode
        });
    }
     catch (error) {
        console.log(error)
    }
}


exports.saveAddress=async(req,res,next)=>{
    try {
        const {type,streetName,streetNumber,apartmentNumber,city,userId}=req.body;
        const savedAddress = new address({
            type:type,
            streetName:streetName,
            streetNumber:streetNumber,
            apartmentNumber:apartmentNumber,
            city:city,

            userId:userId
        })
        const saved=await savedAddress.save();
        res.status(201).json({
            message:"Address saved",
            saved:saved
        });
    } catch (error) {
        console.log(error)
    }
}




