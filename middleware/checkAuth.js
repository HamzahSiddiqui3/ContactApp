const jwt = require("jsonwebtoken");

module.exports=(req, res, next)=>{
    try {
        console.log(process.env.JWT_KEY)
        const token= req.headers.authorization.split(" ")[1];
        const decodeToken= jwt.verify(token, process.env.JWT_KEY);
        console.log(decodeToken);

        req.userData={
            email: decodeToken.email,
            userId: decodeToken.userId
        }
        next();
    } catch (error) {
        res.status(401).json({
            message: "You are not Authenticated!"
          })
    }
}