import React from "react";
import { Link } from "react-router-dom";
import InfoForm from "./InfoForm";
const VinylInstallation = () => {
  return (
    <>
      <div className="relative bg-black">
        <img
          className="w-screen h-72 object-cover opacity-80"
          src="https://get.pxhere.com/photo/background-colors-design-exterior-granite-marble-pattern-rocks-solid-stone-surface-texture-textured-tiles-royalty-free-images-1551827.jpg"
        ></img>
        <h1 className="absolute text-3xl text-slate-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">
          VINYL INSTALLATION
        </h1>
        <h2 className="absolute rounded-full w-full max-w-md text-center cursor-pointer text-xl bg-black p-3 m-auto text-white bottom-4 left-1/2 -translate-x-1/2 font-bold">
          <Link to="/Form">Request a free estimate !!</Link>
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 p-4 justify-items-end">
        <div className="m-auto py-7 px-16">
          <h1 className="text-4xl font-bold">
            Professional Vinyl Flooring Supply & Installation:
          </h1>
          <p className="text-lg py-5 text-slate-600">
            Looking to enhance your space with durable and stylish vinyl
            flooring? SH&H Floors offers expert vinyl installation services that
            bring together functionality, resilience, and aesthetic appeal.
            Vinyl is an excellent choice for both residential and commercial
            spaces, offering a wide range of designs and textures that replicate
            the look of natural wood, stone, or tile at a fraction of the cost.
            Our experienced team ensures a seamless installation, giving you a
            floor that’s beautiful, easy to maintain, and built to last.
          </p>
          <h1 className="text-4xl font-semibold">
            Subfloor Installation & Leveling
          </h1>
          <p className="text-lg py-5 text-slate-600">
            A high-quality vinyl installation starts with a perfectly prepared
            subfloor. At SH&H Floors, we specialize in subfloor preparation and
            leveling, setting the foundation for a flawless finish. We
            understand that vinyl requires a clean, smooth surface to prevent
            imperfections. Our team tailors each subfloor to support the
            specific type of vinyl you choose, ensuring a long-lasting,
            professional look.
          </p>

          <h1 className="text-4xl font-semibold">Expert Installation</h1>
          <p className="text-lg py-5 text-slate-600">
            With SH&H Floors, vinyl installation is handled by seasoned
            professionals dedicated to delivering outstanding results. Our team
            uses advanced techniques and high-grade materials to install vinyl
            with precision, taking care of every detail, from exact measurements
            and cuts to the final, seamless finish. We pride ourselves on
            creating installations that are not only visually appealing but also
            resilient against daily wear and tear.
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
            Elevate Your Space with Vinyl Flooring in Ottawa, ON
          </h1>
          <p className="mb-4 text-lg py-5 text-slate-600">
            LVinyl flooring combines style, comfort, and durability, making it a
            versatile choice for any room. With options in a variety of colors,
            patterns, and textures, SH&H Floors can help you achieve the look
            you want, whether you’re aiming for the warmth of wood, the elegance
            of stone, or a modern tile finish. Our skilled installers bring your
            vision to life with flawless craftsmanship, transforming your space
            into one of comfort and beauty.SH&H Floors is your trusted local
            partner for vinyl flooring installation. From selection to
            installation, we guide you through every step to ensure a smooth
            experience and a stunning floor that exceeds your expectations.
            Experience the difference with SH&H Floors—where vinyl flooring
            expertise meets superior service.
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

export default VinylInstallation;
