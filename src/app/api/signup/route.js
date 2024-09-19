import { NextResponse } from 'next/server'
import DB from '../../../DbConnection/db.js'
import user from '../../../Models/userModel.js'
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";



export async function POST(req, res) {
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
        return NextResponse.json({ "Message": "All Fields are necessary" }, { status: 400 })
    }

    try {
        // Initialize database connection
        DB()

        // Check if user with the same email exists
        const existUser = await user.findOne({ email })

        if (existUser) {
            return NextResponse.json({ "Message": "User already registered!" }, { status: 400 })
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10)

        // Create a new user object
        const newUser = new user({
            name,
            email,
            password: hashPassword
        })


        // Save the new user to the database
        const result = await newUser.save()

        const payload = {
            id: result._id,
            name: result.name,
            email: result.email
        }

        //  Token Generate
        const token = jwt.sign({ token: payload }, process.env.JWT_SECRET, { expiresIn: "30d" })

        // Return success message and user data
        return NextResponse.json({ "Message": "User registered successfully", userData: result , token:token }, { status: 200 })
    } catch (error) {
        // Handle server errors
        return NextResponse.json({ "Message": "User registration server error", error }, { status: 500 })
    }
}

