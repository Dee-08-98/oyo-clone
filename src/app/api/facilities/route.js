import DB from "@/DbConnection/db";
import hotel from "@/Models/hotels";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        DB()
        const result = await hotel.find().distinct("facilities.name")
        // console.log(result);
        return NextResponse.json(
            { Message: " retrieving facilities sucessfull", Data: result },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { Message: "Error retrieving facilities", error: error.message },
            { status: 500 }
        );
    }

}