import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Location = () => {
  return (
    <>
      <div className="m-auto w-fit">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-medium text-center text-slate-700">
          Location
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-3">
          <div className="items-center m-auto">
            <h1 className="font-bold text-lg md:text-2xl">Floor Masters</h1>
            <div className="flex items-center py-3">
              <span>
                <FaLocationDot />
              </span>

              <h2 className="px-3">
                111 Portage Ave, Saint Eustache, MB R0H 1H0{" "}
              </h2>
            </div>
            <div className="flex items-center py-3">
              <span>
                <FaPhoneAlt />
              </span>
              <h2 className="px-3">604-554-6789 </h2>
            </div>
          </div>
          <div>
            <iframe
              width="520"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=111%20Portage%20Ave,%20Saint%20Eustache,%20MB%20R0H%201H0+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
        </div>
        <div className="button text-center py-6 m-auto">
          <button className="bg-lime-500 p-3 text-white  hover:bg-lime-700">
            <Link to="/Contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Location;
