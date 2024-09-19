
"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToSearchBar } from '../ReduxToolkit/slice';

function Filters(props) {
    const [facilities, setFacilities] = useState(null);
    const [price, setPrice] = useState(2000);
    const [checkedList, setCheckedList] = useState([]);

    const hotels = useSelector(state => state.app.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3000/api/facilities')
            .then((res) => {
                const result = res.data.Data;
                setFacilities(result);
            })
            .catch((err) => {
                console.log('Facilities fetching error', err);
            });
    }, []);

    const handlePrice = () => {
        axios.get(`http://localhost:3000/api/facilities/range?price=${price}`)
            .then((res) => {
                const result = res.data.result;
                dispatch(addToSearchBar(result));
            })
            .catch((err) => {
                console.log('Facilities fetching error', err);
            });
    };

    const handleCheckboxChange = (e) => {

        let newList = [];
        const value = e.target.value;
        if (e.target.checked) {
          newList.push(value);
          setCheckedList(newList);
          return;
        }
        newList = newList.filter((i) => i !== value);
        setCheckedList(newList);
    };

    const handleChecklist = () => {
        axios.get(`http://localhost:3000/api/facilities/search?city=${checkedList}`)
            .then((res) => {
                const result = res.data.result;
                console.log(result);
                 dispatch(addToSearchBar(result)); // Uncomment if you want to dispatch the result to Redux
            })
            .catch((err) => {
                console.log('Hotel fetching through checklist error:', err);
            });
    };

    useEffect(() => {
        if (checkedList.length > 0) {
            handleChecklist();
        }
    }, [checkedList]);

    return (
        <>
            {
                hotels && hotels.length > 0 &&
                <div className="w-full m-5 h-auto">
                    <div className="border-r-4 border-b-4 border-red-500 rounded-lg p-5 h-auto">
                        <div className="flex justify-evenly items-center">
                            <label htmlFor="price" className='font-serif font-bold text-black text-xl'>Price</label>
                            <input
                                type="range"
                                name="price"
                                id="price"
                                onChange={(e) => setPrice(e.target.value)}
                                min={850}
                                max={2000}
                                defaultValue={price}
                            />
                            <span className='font-serif font-bold text-black text-lg'> &#8377; {price}</span>
                        </div>
                        <div className="flex items-center justify-center mt-8">
                            <button onClick={handlePrice} className='bg-orange-500 pl-5 pr-5 pt-2 pb-2 rounded-lg font-serif font-bold text-lg'>Search</button>
                        </div>
                        <div>
                            <h3 className='font-serif font-bold text-rose-800 mt-8 ml-7 pb-8 mb-2'>Filter By Facilities :-</h3>
                            {
                                facilities === null ? "" :
                                    facilities.map((item) => (
                                        <p key={item} className="grid grid-cols-4 my-3 ml-7 font-serif font-bold">
                                            <label htmlFor="checkbox" className="col-span-2">{item}</label>
                                            <input
                                                type="checkbox"
                                                id={item}
                                                value={item}
                                                onChange={handleCheckboxChange}
                                                className="w-5 h-5 ml-3 col-span-1"
                                            />
                                        </p>
                                    ))
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Filters;
