
import DB from "@/DbConnection/db";
import hotel from "@/Models/hotels";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const { searchParams } = new URL(req.url)
    const  Price = searchParams.get("price")
    console.log(Price);

    try {
        
        DB()
        const result = await hotel.find({price:{$lte:Price}})
        return NextResponse.json(
            { Message: " retrieving from price range of hotel sucessfull",result },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { Message: "Error retrieving in facilities search" },
            { status: 500 }
        );
    }
    


}