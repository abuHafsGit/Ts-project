import { Request, Response } from "express";
import { IUser, User } from "../models/User";
import bcrypt from 'bcrypt'
export const signUp = async (req: Request, res: Response) => {

    const { name, email, phone, username, password, role
    } = req.body;

    try {


        if (!name || !email || !phone || !username || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            })
        }
        let user: IUser | null;

        const securePassword = await bcrypt.hash(password, 10)
        user = await User.findOne({ email: email })

        if (user) {
            return res.status(400).json({
                success: false,
                message: "Please Login"
            })
        }

        user = await User.create({
            name, email, username, phone, password: securePassword, role
        })

        return res.status(201).json({
            success: true,
            message: "SignUp succesfully",
            user: user
        })


    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}