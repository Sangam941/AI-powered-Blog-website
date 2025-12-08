import UserModel from "../models/UserModel.js"
import bcrypt from 'bcrypt'
import { jwtToken } from "../utils/jwtToken.js"

export const register = async (req,res)=>{
    try {
        const {username, email, password} = req.body

        if(!email || !password || !username){
            return res.status(400).json({success:false, message:"All fields are required"})
        }

        const user = await UserModel.findOne({email})
        if(user){
            return res.status(409).json({success:false, message:"User already exist, please login!"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await UserModel.create({
            username,
            email,
            password : hashedPassword
        })

        res.status(201).json({
            success: true,
            message: "User created successfully!",
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



export const login = async (req,res)=>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message:"All fields are required", success:false})
        }

        let user = await UserModel.findOne({email})
        const dataUser = user

        if(!user){
            return res.status(401).json({success:false, message:"email or password is incorrect!"})
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if(!checkPassword){
            return res.status(401).json({success:false, message:"email or password is incorrect!"})
        }

        const token = jwtToken(user)

        res.status(200).json({success: true, message:"user loggin successfully!", token, user})
        
    } catch (error) {
        return res.status(500).json({message: error.message, success:false})
    }
}


