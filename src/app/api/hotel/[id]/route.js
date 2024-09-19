import DB from "@/DbConnection/db";
import hotel from "@/Models/hotels";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const query = res
    const Paramsid = query.params.id;
    if (!Paramsid) {
        return NextResponse.json(
            { "Message": "Params is required" },
            { status: 400 }
        );
    }

    try {

        DB()
        const SpecificHotel = await hotel.findById(Paramsid)
        
            return NextResponse.json(
                { "Message": "Hotel Find Sucessfull", Data: SpecificHotel },
                { status: 200 }
            );


    } catch (error) {

        return NextResponse.json(
            { Message: "Error retrieving Specific hotel data", error: error.message },
            { status: 500 }
        );

    }

}