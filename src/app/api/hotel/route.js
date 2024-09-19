import DB from "@/DbConnection/db"
import hotel from "@/Models/hotels"
const { NextResponse, NextRequest } = require("next/server");

// export async function POST(req,res) {

//     const hotelData = await req.json()

//     try {

//         // Initialize database connection
//         DB()

//         const data = new hotel(hotelData)
//         const result = await data.save()
//         return NextResponse.json({ "Message": "Hotels Data Save Sucessfully !", Data: result }, { status: 200 })
//     } catch (error) {

//         // Handle server errors
//         return NextResponse.json({ "Message": "hotel api error", error }, { status: 500 })
//     }
// }




export async function GET(req, res) {

    const { searchParams } = new URL(req.url)
    const city = searchParams.get('city')

    // console.log(city);

    try {
        // Initialize database connection
        DB(); // 

        // Validate and sanitize `city` as needed
        if (!city) {
            return NextResponse.json(
                { Message: "City query parameter is required" },
                { status: 400 } // Bad Request
            );
        }

        const filterHotel = await hotel.find({ location: city });

        if (filterHotel.length > 0) {
            return NextResponse.json(
                { Message: " Specific Hotels data retrieved successfully", Data: filterHotel },
                { status: 200 }
            );
        }

        const allHotel = await hotel.find({});

        return NextResponse.json(
            { Message: "All Hotels data retrieved successfully", Data: allHotel },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { Message: "Error retrieving hotel data", error: error.message },
            { status: 500 }
        );
    }
}