
"use client";

import { useFormik } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import loginValidation from "../schemas/loginValidation";
import Link from "next/link";
import Cookies from "js-cookie";

const initialValues = {
    email: "",
    password: ""
};

function Page() {
    const [loginError, setLoginError] = useState(null);
    const router = useRouter();

    const {
        errors,
        values,
        touched,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormik(
        {
            initialValues,
            validationSchema: loginValidation,
            onSubmit: (values) => {
                // console.log(values);
                axios.post('http://localhost:3000/api/login', values)
                    .then((res) => {
                        // console.log(res);
                        if (res?.data) {
                            Cookies.set("users", res.data.token, { expires: 7 });
                            alert(res.data.Message);
                            router.back();
                          }
                    })
                    .catch((err) => {
                        console.log('Login form error:', err);
                        if(err?.response){
                            const msg = err.response.data.Message
                            setLoginError(msg);
                        }
                        // setLoginError("User not registered ! please registered first");
                    });
            }

        }
    )

    useEffect(() => {

        if(loginError !== null){
            alert(loginError)
            setLoginError(null);
        }


    }, [loginError]);

    return (
        <div>
            <div className="flex h-screen justify-center items-center relative font-serif bg-login-background bg-no-repeat bg-cover">
                <div className="absolute top-10 px-20 flex items-center w-full text-white opacity-90">
                    <h2 className='text-4xl font-extrabold mr-5 font-serif'>OYO</h2>
                    <p className='text-2xl font-bold font-serif'>Hotels and homes across 800 cities, 24+ countries</p>
                </div>
                <div className="flex justify-center items-center w-9/12">
                    <div className="text-white">
                        <p className='font-bold text-4xl tracking-wide'>There's a smarter way to oyo around</p>
                        <p className='mt-5 text-justify'>Sign up with your email and get exclusive access to discounts and savings on OYO stays with our many travel parameters.</p>
                    </div>
                    <div className="ml-10 w-10/12 h-auto pb-16 bg-white">
                        <p className='h-8 bg-gradient-to-r from-red-400 to-red-700 flex items-center px-10 font-bold tracking-wider font-serif text-white'>Signup & Get RS.500 OYO Money</p>
                        <div className="px-10">
                            <h3 className='text-3xl font-bold my-9'>Login / Signup</h3>
                            <p className='font-bold mb-1'>Please enter your email to continue</p>
                            <form onSubmit={handleSubmit} >

                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder='Enter your email...'
                                    className='outline-none border my-3 border-black px-3 py-2 w-full h-10 font-bold tracking-wider'
                                />
                                {errors.email && touched.email && (
                                    <p className='lg:indent-2 md:indent-2 sm:indent-1 mt-1 font-bold text-red-500 font-serif'>{errors.email}</p>
                                )}
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder='Enter your password...'
                                    className='outline-none border my-3 border-black px-3 py-2 w-full h-10 font-bold tracking-wider'
                                />
                                {errors.password && touched.password && (
                                    <p className='lg:indent-2 md:indent-2 sm:indent-1 mt-1 font-bold text-red-500 font-serif'>{errors.password}</p>
                                )}
                                <button
                                    type='submit'
                                    className='w-full h-10 my-8 font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white tracking-wider'>
                                    Login
                                </button>
                            </form>
                            <p className='my-1'>
                                <span className='ml-2'>Not have an account?</span>
                               <Link  href={'/signup'} > <span className='underline text-green-600 font-bold hover:cursor-pointer pb-1 ml-1'>SignUp Here</span></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;

