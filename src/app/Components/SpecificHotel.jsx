"use client";

import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function SpecificHotel({ paramsId }) {
    const router = useRouter();
    const [hotelData, setHotelData] = useState(null);
    const idd = paramsId

    useEffect(() => {
        axios.get(`http://localhost:3000/api/hotel/${idd}`)
            .then((res) => {
                const result = res.data.Data;
                setHotelData(result);
            })
            .catch((err) => {
                console.log('Specific Hotel Data fetching error :- ', err);
            });
    }, [idd]);

    const getCookies = Cookies.get('users')

    const goback = () => {
        router.back();
    };
    const gotoLogin = () => {
        router.push('/login');
    }

    const gotoPayment = () => {
        router.push(`/payment/${idd}`);
    }

    if (hotelData === null) {
        return (
            <>
                {/* // <div className="h-screen w-screen flex justify-center items-center">
            //     <div className="flex flex-col justify-center items-center">
            //         <p className="text-black font-extrabold text-2xl font-serif">
            //             No Specific hotels available at the moment.
            //         </p>
            //         <Link href="/">
            //             <button className="mt-3 bg-gray-800 pt-2 pb-2 pl-4 pr-4 font-extrabold text-white tracking-wider rounded-lg hover:bg-gray-900">
            //                 Go Back
            //             </button>
            //         </Link>
            //     </div>
            // </div> */}
            </>
        );
    }

    const { name, specialFeatures, banner, price } = hotelData;

    return (
        <>
            <div className="w-full h-auto">
                <div className="h-[400px] lg:h-[500px] p-5 sm:pl-10 sm:pr-10 md:pl-20 md:pr-20 lg:pl-40 lg:pr-40">
                    <Image src={banner} height={2000} width={2000} alt="Hotel Image" className="h-full w-full rounded-lg" />
                </div>
                <div className="pl-5 pr-5 pt-2 sm:pl-10 sm:pr-10 md:pl-20 md:pr-20 lg:pl-40 lg:pr-40">
                    <h3 className="font-bold text-xl font-serif text-black lg:text-2xl lg:text-black text-justify">{name}</h3>
                    <p className="font-serif text-black mt-3 text-justify">{specialFeatures}</p>
                    <button className="mt-5 cursor-auto bg-sky-500 pt-3 pb-3 w-[170px] font-extrabold text-white tracking-wider rounded-lg hover:bg-sky-600">
                        Price: &#8377; {price}
                    </button>
                    <div className="lg:flex lg:items-center">
                        <h3 className="text-xl font-bold font-serif mt-5 text-black">Facilities:</h3>
                        <ul className="text-base flex flex-wrap justify-start items-center font-serif mt-2 lg:mt-5 lg:ml-3">
                            <li>Swimming Pool, </li>
                            <li>Playground, </li>
                            <li>Laundry, </li>
                            <li>Movie Theatre, </li>
                            <li>Spa/Salon, </li>
                            <li>Conference Hall, </li>
                            <li>Restaurant, </li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row">

                        {
                            getCookies ? <button onClick={gotoPayment} className="mt-5 md:mt-7 cursor-pointer bg-red-600 pt-3 pb-3 w-[170px] font-extrabold text-white tracking-wider rounded-lg hover:bg-red-700 mb-5">
                                Book Now </button> : <button onClick={gotoLogin} className="mt-5 md:mt-7 cursor-pointer bg-red-600 pt-3 pb-3 w-[170px] font-extrabold text-white tracking-wider rounded-lg hover:bg-red-700 mb-5"> Please Login </button>
                        }
                        <button onClick={goback} className="sm:ml-5 mt-3 sm:mt-5 md:mt-7 cursor-pointer bg-gray-700 pt-3 pb-3 w-[170px] font-extrabold text-white tracking-wider rounded-lg hover:bg-gray-900 mb-5">
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SpecificHotel;
