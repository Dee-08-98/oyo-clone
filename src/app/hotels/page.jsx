"use client"

import Hotel from "../Components/Hotel";
import Logo from "../Components/Logo";
import Filter from "../Components/Filters";
import { useSelector } from "react-redux";
import Link from "next/link";

function page(props) {
    const hotels = useSelector(state => state.app.cart);

    return (
        <>
            {/* <Logo/> */}

            {
    
                hotels && hotels.length >0?(
            <div className="grid grid-cols-12">
                <div className="col-span-3 w-full ">
                    <Filter />
                </div>
                <div className="col-span-9 w-full h-screen overflow-y-scroll">
                    <Hotel />

                </div>

            </div>
            )

            : (
            <div className="h-screen w-full flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-black font-extrabold text-2xl font-serif">No hotels available at the moment.</p>
                    <Link href={'/'}>
                        <button className="mt-3 bg-gray-800 pt-2 pb-2 pl-4 pr-4 font-extrabold text-white tracking-wider rounded-lg hover:bg-gray-900">
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
            )
            }



        </>
    );
}




export default page;

