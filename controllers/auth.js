exports.register=async(req,res,next)=>{
    try {
        const {uName,email,mobile,password,cPassword,cCode}=req.body;
        if(password!=cPassword){
             throw "password  must be same"    
        }
        const encPassword= await bcrypt.hash(password,10);
        console.log(encPassword)
        const authUser= new auth({
            uName:uName,
            email:email,
            mobile:mobile,
            password:encPassword,
            cCode:cCode
        })
    
        const saveUser= await authUser.save();
        res.status(201).json({
            message:"User saved",
            authRegister:saveUser
        });
    
    
    } catch (error) {
        res.status(401).json({
            message:error
        });
    }
}


exports.login=async(req,res,next)=>{
    try {
        const user= await auth.findOne({email: req.body.email})
        console.log(user)
        if(!user){
            throw "Authentification Failed!!"
        }
        const confirmPass= await bcrypt.compare(req.body.password, user.password)
        if(!confirmPass){
            throw "Authentification Failed!!"
        }
        const token = jwt.sign({ email: user.email, userId: user._id },process.env.JWT_KEY, {
            expiresIn: "1h"
          })
      
          res.status(200).json({
            token: token,
            expiresIn: 3600,
            userid: user._id
          });
          
    } catch (error) {
        return res.status(401).json({
            message: error
        });
    }
}