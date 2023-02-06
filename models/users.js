import mongoose from "mongoose";

// Defination Schema
const userSchema=new mongoose.Schema({
    name:{type:String ,required:true ,trim:true},
    email:{type:String ,required:true ,trim:true,match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/},
    password:{type:String ,required:true ,trim:true},
    userType:{type:String,enum: ['manager','admin'],required:true},
    tc:{type:Boolean ,required:true }
})

// Model
const userModel=mongoose.model("user",userSchema)

export default userModel