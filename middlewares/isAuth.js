const jwt = require("jsonwebtoken")
const {jwtSecret} = require("../config/keys")

const isAuth = async(req,res,next) => {
    try{
        const authorization = req.headers.authorization
  ? req.headers.authorization.split(" ")
  : [];
        console.log(authorization)
        const token = authorization.length > 1 ? authorization[1] : null;

        if(token){
            const payload = jwt.verify(token, jwtSecret);
            if(payload){
                req.user = {
                _id: payload._id,
                name: payload.name,
                email: payload.email,
                role: payload.role
                }

                console.log("isAuth: req.user object after population:", req.user);
                next()
            }
            else{
                res.code = 400;
                throw new Error("unauthorized");
            }
        }else{
            res.code = 401 ;
            throw new Error("Token is required")
        }
    }
    catch(error){
        next(error);
    }
}

module.exports = isAuth;