import React from "react";
import { Link } from "react-router-dom";
import InfoForm from "./InfoForm";
const LaminateInstallation = () => {
  return (
    <>
      <div className="relative bg-black">
        <img
          className="w-screen h-72 object-cover opacity-80"
          src="https://get.pxhere.com/photo/house-wood-wall-wood-stain-hardwood-wood-flooring-lumber-plank-flooring-floor-plywood-garapa-laminate-flooring-1457089.jpg"
        />
        <h1 className="absolute text-3xl text-slate-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">
          LAMINATE INSTALLATION
        </h1>
        <h2 className="absolute rounded-full w-full max-w-md text-center cursor-pointer text-xl bg-black p-3 m-auto text-white bottom-4 left-1/2 -translate-x-1/2 font-bold">
          <Link to="/Form">Request a free estimate !!</Link>
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 p-4 justify-items-end">
        <div className="m-auto py-7 px-16">
          <h1 className="text-4xl font-bold">
            Laminate Supply & Installation:
          </h1>
          <p className="text-lg py-5 text-slate-600">
            Looking to install new laminate floors or revamp an existing space?
            Trust SH&H Floors to get it done right. Laminate installation is a
            smart, budget-friendly choice that still offers stunning results
            when handled by professionals. With our extensive experience and
            attention to detail, SH&H Floors ensures a beautiful, durable finish
            that will stand the test of time. Our team has the expertise to
            install laminate flooring with precision, bringing style and quality
            to every space.
          </p>
          <h1 className="text-4xl font-semibold">
            Subfloor Installation & Leveling
          </h1>
          <p className="text-lg py-5 text-slate-600">
            A flawless laminate floor requires a perfectly prepared subfloor. At
            SH&H Floors, we specialize in subfloor installation and leveling,
            ensuring a stable base that supports a smooth laminate finish. Each
            floor type requires specific preparation, and our experts tailor the
            subfloor to meet the needs of laminate flooring. Whether over an
            existing floor or as part of a new build, we’ll make sure your floor
            has the ideal foundation for a seamless result.
          </p>
          <p>
            Questions? We’re Here to Help. Stay informed about our latest offers
            and expert services.
          </p>
          <h1 className="text-4xl font-semibold">Expert Installation</h1>
          <p className="text-lg py-5 text-slate-600">
            At SH&H Floors, we believe that every installation deserves the
            highest level of care and precision. Our expert installers bring
            years of experience and craftsmanship to each project, ensuring that
            your laminate floor not only looks fantastic but also withstands
            daily wear. We use industry-leading techniques and top-quality
            materials to create smooth, secure installations that last. Whether
            it’s a cozy home renovation or a large commercial project, our team
            handles each step meticulously—from precise measurements and cutting
            to a seamless installation process. We tailor our approach to suit
            your space and style, so you get a perfect finish every time. With
            SH&H Floors, expert installation means durability, beauty, and
            satisfaction that lasts.
          </p>
        </div>
        <div className="bg-gray-200 w-full h-full max-w-lg max-h-fit mr-3">
          <InfoForm />
        </div>
      </div>
      <div className="h-[1px] bg-black"></div>
      <div className="flex items-center m-auto py-7 px-16">
        <div className=" flex flex-col items-center justify-center mb-8">
          <h1 className="text-2xl font-bolder mb-2 font-semibold">
            Enhance Your Space with SH&H Laminate Floors in Ottawa, ON
          </h1>
          <p className="mb-4 text-lg py-5 text-slate-600">
            Laminate flooring installation is a blend of precision and artistry,
            and we treat each project as an opportunity to enhance your home’s
            look and feel. From wood-look styles to unique patterns and
            textures, our team is dedicated to bringing your vision to life.
            With a focus on quality and craftsmanship, we deliver laminate
            installation services that reflect your taste and preferences. Enjoy
            the versatility and durability of laminate floors in your Ottawa
            home. Our expert installers manage every step, from selecting the
            ideal laminate style to final installation and finishing, ensuring a
            flawless and lasting outcome. Transform your space into a blend of
            elegance and functionality with our top-notch laminate installation
            services.
          </p>
          <Link
            to="/Form"
            className="bg-black p-3 rounded-full w-full max-w-md text-white text-center block"
          >
            Request a free Estimate
          </Link>
        </div>
      </div>
    </>
  );
};

export default LaminateInstallation;
