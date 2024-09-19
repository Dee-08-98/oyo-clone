// "use client";

import Image from "next/image";

const Header4 = () => {
  return (
    <div className=" my-14   px-20">
      <div className="border-2 rounded-lg border-gray-300 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src={"/fire.jpg"}
          alt="fire"
          width={200}
          height={200}
          className=" w-24 h-24 rounded-full "
        />
        <div className=" ">
          <p className=" font-bold">Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>
      </div>
      <div className="flex  pr-10">
        <input type="email" className="px-6 py-3 rounded-lg mr-5 w-80 h-14 outline-none border border-gray-300" placeholder="e.g. john@gmail.com" />
        <button type="submit" className=" w-40 rounded-lg h-14 bg-red-500 text-xl text-white cursor-pointer font-serif"> Notify </button>
      </div>
      </div>
    </div>
  );
};

export default Header4;
