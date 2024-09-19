
import DB from "@/DbConnection/db";
import hotel from "@/Models/hotels";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const { searchParams } = new URL(req.url)
    const city = searchParams.getAll("city")
    // console.log("facilities are :- ",city);

    try {
        
        DB()
        const result = await hotel.find({"facilities.name":{$in:city}})
        // console.log(result);
        return NextResponse.json(
            { Message: " retrieving facilities search sucessfull", result },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { Message: "Error retrieving in facilities search" },
            { status: 500 }
        );
    }
    


}