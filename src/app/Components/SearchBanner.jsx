"use client"

import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToSearchBar } from "../ReduxToolkit/slice";
import { useRouter } from "next/navigation"; // Import from 'next/navigation' instead

function SearchBanner() {
    const [cityName, setCityName] = useState("");
    const dispatch = useDispatch();
    const router = useRouter(); // Ensure this is used within a valid client-side context

    function handleSubmit(e) {
        e.preventDefault();
        if (cityName.trim() !== "") {
            axios.get(`http://localhost:3000/api/hotel?city=${cityName.trim()}`)
                .then((res) => {
                    if (res?.data) {
                        dispatch(addToSearchBar(res.data.Data));
                        // console.log(res.data.Data);
                        router.push('/hotels'); // Use router.push
                    }
                })
                .catch((err) => {
                    console.log('Hotel API fetching error:', err);
                });
        }
    }

    return (
        <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
            <div>
                <h2 className="text-3xl font-bold text-white text-center p-5 tracking-[1px] font-sans">
                    Over 157,000 hotels and homes across 35 countries
                </h2>
                <form onSubmit={handleSubmit} className="flex justify-center items-center w-full">
                    <input
                        onChange={(e) => setCityName(e.target.value)}
                        value={cityName}
                        type="text"
                        className="w-[450px] border-r-2 border-gray-400 outline-none font-bold indent-3 h-12"
                        placeholder="Search"
                    />
                    <button
                        type="submit"
                        className="bg-green-600 h-12 px-10 text-white hover:bg-green-700"
                    >
                        Search
                    </button>
                </form>
                <div className="flex justify-start items-center py-5 px-[300px]">
                    <button type="button" className="h-12 px-10 text-white">
                        Continue Your Search
                    </button>
                    <button
                        type="button"
                        className="h-12 px-10 text-white border-2 border-white hover:bg-red-700 rounded-xl"
                    >
                        Inn Coorg Homestay .2 Guests
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchBanner;
