import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
//now i am using jwt token that is json web token
import JWT from 'jsonwebtoken';

export const registerController= async(req,res)=>{//call back function
    try {
        const {name,email,password,phone,address} = req.body;
        //validations
        if(!name){
            return res.send({message:"Name is required"});
        }
        if(!email){
            return res.send({message:"Email is required"});
        }
        if(!password){
            return res.send({message:"Password is required"});
        }
        if(!phone){
            return res.send({message:"Phone number is required"});
        }
        if(!address){
            return res.send({message:"Address is required"});
        }

        //check user
        const existingUser = await userModel.findOne({email})
        //existing user
        if(existingUser){
            return res.status(200).send({
                success:false,
                message: "Already register please login"
            })
        }

        //register user
        const hashedPassword = await hashPassword(password);
        //saveuser
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
        }).save();
        res.status(201).send({
            succes:true,
            message:"User Registered Succesfully",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in registration",
            error,
        });
    }
};

//POST LOGIN
export const loginController= async(req,res)=>{
    try {
        const {email,password}=req.body;
        //validation
        if(!email || !password){
            return req.status(404).send({
                succes:false,
                message: 'Invalid email or password',
            });
        }
        //check user
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                succes:false,
                message:"Email is not registered"
            });
        }
        const match = await comparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                succes:false,
                message:"Invalid Password"
            });
        }

        //token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });
        res.status(200).send({
            succes:true,
            message: "Login Successfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            succes:false,
            message: "Error in login",
            error,
        });
    }
};

//testController
export const testController =(req,res)=>{
    // console.log("Protected Route");
    res.send("Protected Route");
}