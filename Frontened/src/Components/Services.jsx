import React from "react";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col items-center p-10">
      <h1 className="text-2xl text-center font-bold py-3">Our Services</h1>
      <div className="flex w-full justify-center items-start py-5 mx-auto">
        <img
          className="w-[40%] h-70 px-10 py-2"
          src="https://as1.ftcdn.net/jpg/00/26/03/90/220_F_26039006_AwM5XObH1oNtvkHjkMYFFm2sdviwuXiu.jpg"
          alt="Services"
        />

        {/* Services List */}
        <div className="w-1/2 pl-15">
          <ul className="list-disc text-left">
            <li className="py-2">
              Shop at Home
              <NavLink to="/ShopAtHome">
                <span className="font-bold px-3">Learn more</span>
              </NavLink>
            </li>
            <li className="py-2">
              Carpet Installation
              <NavLink to="/CarpetInstallation">
                <span className="font-bold px-3">Learn more</span>
              </NavLink>
            </li>
            <li className="py-2">
              Hardwood Installation
              <NavLink to="/HardwoodInstallation">
                <span className="font-bold px-3">Learn more</span>
              </NavLink>
            </li>
            <li className="py-2">
              Laminate Installation
              <NavLink to="/LaminateInstallation">
                <span className="font-bold px-3">Learn more</span>
              </NavLink>
            </li>
            <li className="py-2">
              Vinyl Installation
              <NavLink to="/VinylInstallation">
                <span className="font-bold px-3">Learn more</span>
              </NavLink>
            </li>
            <li className="py-2">
              Residential Painting
              <NavLink to="/ResidentialPainting">
                <span className="font-bold px-3">Learn more</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
