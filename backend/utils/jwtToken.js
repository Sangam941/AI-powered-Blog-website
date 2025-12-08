import jwt from "jsonwebtoken"

export const jwtToken = (user)=>{
    return jwt.sign({id:user._id, email: user.email}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_TOKEN_EXPIRE})
}