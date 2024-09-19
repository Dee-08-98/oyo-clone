"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Filters from "./Filters";

function Hotel() {
    // Access the hotels data directly
    const hotels = useSelector(state => state.app.cart);
    // console.log('hotels');

    return (
        <>

            {/* ===========================important================================ */}




            {hotels && hotels.length > 0 && (
                hotels.map((item) => (

                    <div key={item._id} className=" h-auto w-full ">
                        <div className="m-4 mb-16 sm:ml-12 sm:mr-12  md:ml-16 md:mr-16 lg:ml-40 lg:mr-40 border-b-4 border-red-500">
                            <div className="h-auto mb-10">
                                <div className="h-[400px] w-full">
                                    <img src={item.banner} height={200} width={200} alt="Hotel Image" className="h-full w-full rounded-lg"></img>
                                </div>
                                <div className=" hidden sm:block h-[100px] lg:h-[150px] w-full mt-2 ">
                                    <div className="flex items-center justify-evenly h-[100px] lg:h-[150px] w-full">
                                        {
                                            item.gallery.map((itm) => {
                                                return <img src={itm} height={200} width={200} alt="Image..." className="h-full w-[30.33%] rounded-lg"></img>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className=" h-auto mb-14">
                                <h3 className="font-bold font-serif text-2xl text-blue-900">{item.name}</h3>
                                <p className="font-serif mt-5 text-justify">{item.specialFeatures}</p>
                                <div className=" flex mt-5 items-center flex-wrap ">
                                    <span className="text-black font-extrabold text-xl font-serif mr-2">Facilities :- </span>
                                    {/* Free wifi , Pet Care , Park , Swimming Pool , Spa , Resort , etc. */}

                                    {
                                        item ? item.facilities.map((facilities) => {
                                            return <span className="font-serif"> {facilities.name} ,  </span>
                                        }) : ""
                                    }
                                    etc.

                                </div>
                                <div className="sm:flex mt-5 items-center ">
                                    <button className="mb-3 w-full sm:w-[160px] p-3 bg-sky-600 rounded-lg text-white font-serif font-bold">Price :  &#8377; {item.price} </button>
                                    <Link className="ml-5 hidden sm:block font-extrabold font-serif underline text-red-900" href={`/hotels/${item._id}`}>See More Details</Link>
                                    <Link href={`/hotels/${item._id}`}> <button className="sm:hidden w-full sm:w-[160px] p-3 bg-gray-600 text-white rounded-lg font-serif font-bold mr-5"> More Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>




                ))
            )
            }

        </>
    );
}

export default Hotel;



