import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        specialFeatures: {
            type: String,
            required: true,
            trim: true
        },
        banner: {
            type: String,
            required: true,
        },
        gallery: [
            {
                type: String,
            }
        ],

        price: {
            type: Number
        },
        facilities: [
            {
                img: String,
                name: String
            }
        ],
        location:{
            type:String
        }
    },
    {
        timestamps: true
    }
)

const hotel = mongoose.models.hotel || mongoose.model('hotel', hotelSchema)

export default hotel;