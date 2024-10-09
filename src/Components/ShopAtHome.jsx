import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoHome } from "react-icons/io5";
import Form from "./Form";

const ShopAtHome = () => {
  return (
    <>
      <div className="relative bg-black">
        <img
          className="w-screen h-80 object-cover opacity-70"
          src="https://assets.site-static.com/blogphotos/1715/2715-home-flooring-guide.jpg"
        />
        <h1 className="absolute text-4xl text-slate-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
          SHOP AT HOME
        </h1>
        <h2 className="absolute text-2xl  text-white  p-3 m-auto bottom-4 left-1/2 -translate-x-1/2 font-thin">
          WE BRING THE FLOORING TO YOU!
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        <div className=" text-center p-4">
          <h1 className="text-3xl font-semibold mb-3 max-w-3xl ">
            Shopping For Floors Made Easy!
          </h1>
          <h2 className="font-thin max-w-3xl mb-4">
            FIND YOUR NEW FLOORS FROM THE COMFORT OF YOUR HOME
          </h2>
          <h2 className="text-3xl font-semibold  max-w-3xl">How It Works:</h2>

          <div className=" flex-col space-y-6 p-3">
            <h1 className="text-amber-900 text-7xl flex font-thin ">
              <FaClipboardList />
              <span className="text-gray-800 text-2xl ">
                Submit a request for your shop at home service
              </span>
            </h1>
            <h1 className="text-amber-900 text-7xl flex font-thin">
              <MdPhoneIphone />
              <span className="text-gray-800 text-2xl">
                Initial phone consultation
              </span>
            </h1>
            <h1 className="text-amber-900 text-7xl flex font-thin">
              <SlCalender />
              <span className="text-gray-800 text-2xl">
                Shop at home appointment confirmation
              </span>
            </h1>
            <h1 className="text-amber-900 text-7xl flex font-thin">
              <IoHome />
              <span className="text-gray-800 text-2xl">
                We bring samples right to your front door!
              </span>
            </h1>
          </div>
        </div>
        <div className="bg-gray-400">
          <Form />
        </div>
      </div>
    </>
  );
};

export default ShopAtHome;
