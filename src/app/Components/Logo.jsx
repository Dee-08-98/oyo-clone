"use client"

import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function Logo(props) {

    const router = useRouter()
    const auth =  Cookies.get('users')


    const logout = ()=>{
        Cookies.remove("users")
        router.push('/login')
    }

    return (
        <div className="  flex justify-evenly   items-center h-[84px] px-10">
            <Image src={'/logo.png'} height={100} width={200} className="w-24 h-24" alt="loading..." />
            <div className="">
                <div className=" h-full flex">
                    <Block title={"Become a member"} para={"Additional 10% off on stays."} icon={'/w1.jpg'} />
                    <Block
                        title={"OYO for business"}
                        para={"Trusted by 5000 corporates."}
                        icon={'/bag.jpg'}
                    />
                    <Block title={"List your property"} para={"Start earning in 30 min."} icon={'/building.jpg'} />
                    <Block title={"8709345623"} para={"Call us to book now."} icon={'/phone.jpg'} />
                    <div className="  flex items-center justify-center px-3">
                        <Image
                            src={'/avtar.jpg'}
                            alt="demo"
                            width={40}
                            height={40}
                            className=" w-10 h-10 rounded-full mr-4"
                        />
                        {
                        auth ? (
                            
                            <h3 className="font-bold cursor-pointer" onClick={logout}> Logout</h3>
                           
                        ) : (
                            <Link href={'/login'}>
                            <h3 className="font-bold"> Login / Signup </h3>
                            </Link>
                        )
                       }

                       
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Logo;