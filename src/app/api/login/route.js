import DB from "@/DbConnection/db";
import user from "@/Models/userModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";


export async function POST(req, res) {

    const { email, password } = await req.json()

    if (!email || !password) {
        return NextResponse.json({ "Message": "All Fields are necessary" }, { status: 400 })
    }


    try {

        // Initialize database connection
        DB()

        // Check if user with the same email exists
        const existUser = await user.findOne({ email })

        if (!existUser) {
            return NextResponse.json({ "Message": "User not registered ! please registered first" }, { status: 400 })
        }

        // Passsword matching
        const matchedPassword = await bcrypt.compare(password, existUser.password)

        if (!matchedPassword) {
            return NextResponse.json({ "Message": "Invalid Credentials !" }, { status: 400 })
        }

        const payload = {
            id: existUser._id,
            name: existUser.name,
            email:existUser.email
        }

        //  Token Generate
        const token = jwt.sign({ token: payload }, process.env.JWT_SECRET, { expiresIn: "30d" })
        return NextResponse.json({ "Message": "Login Sucesfull", token , userData:payload }, { status: 200 })

    } catch (error) {
        // Handle server errors
        return NextResponse.json({ "Message": "User registration server error", error }, { status: 500 })
    }


}