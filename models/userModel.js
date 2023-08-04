//creating schema
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true//check for void spaces
    },
    email:{
        type:String,
        required: true,
        uniqe:true//check for void spaces
    },
    password:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    role:{
        type:String,
        default:0
    }
},
{
    timestamps:true//newuser ka new timestamp
});

export default mongoose.model('user',userSchema);