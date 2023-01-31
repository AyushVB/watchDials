import jwt from 'jsonwebtoken'
import userModel from '../models/users.js'

const checkUserAuth= async(req,res,next)=>{
    const { authorization }=req.headers
    
    if(authorization && authorization.startsWith('Bearer')){
        const token=await authorization.split(' ')[1]
         
        // verify token
        jwt.verify(token,process.env.JWT_SECRET_KEY,async (err,user)=>{
            if (err) {
                return res.status(403).send({"status":"failed","message":"Authentication refused"})
            }
            req.user=await userModel.findById(user.userID).select('-password')
            next();
        })
    }
    else {
        res.status(401).send({"status":"failed","message":"Unauthorized user"})
    }   
}

export default checkUserAuth
