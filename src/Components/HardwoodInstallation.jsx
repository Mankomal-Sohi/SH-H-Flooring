import React from "react";
import { Link } from "react-router-dom";
import InfoForm from "./InfoForm";
const HardwoodInstallation = () => {
  return (
    <>
      <div className="relative bg-black">
        <img
          className="w-screen h-72 object-cover opacity-80"
          src="https://www.carpetguys.com/blog/wp-content/uploads/2021/02/carpet-installation-tools-scaled.jpg"
        />
        <h1 className="absolute text-3xl text-slate-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">
          CARPET INSTALLATION
        </h1>
        <h2 className="absolute rounded-full w-full max-w-md text-center cursor-pointer text-xl bg-black p-3 m-auto text-white bottom-4 left-1/2 -translate-x-1/2 font-bold">
          <Link to="/Form">Request a free estimate !!</Link>
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 p-4 justify-items-end">
        <div className="m-auto py-7 px-16">
          <h1 className="text-4xl font-bold">
            Hardwood Supply & Installation:
          </h1>
          <p className="text-lg py-5 text-slate-600">
            Are you ready to elevate the elegance and durability of your home
            with new hardwood flooring? Whether you’re installing hardwood for
            the first time or replacing your existing floors, it’s essential to
            ensure that the job is done correctly. Hardwood installation is a
            significant investment, and our team at Advantage Flooring is here
            to help you avoid costly missteps. With over a decade of experience,
            we specialize in delivering exceptional hardwood flooring solutions
            tailored to your needs. Our skilled installers are well-versed in a
            variety of hardwood types, ensuring a stunning finish that enhances
            the beauty of your space.
          </p>
          <h1 className="text-4xl font-semibold">
            Hardwood Preparation and Selection
          </h1>
          <p className="text-lg py-5 text-slate-600">
            Before diving into the installation of your new hardwood floors,
            proper preparation is key. This includes selecting the right
            hardwood type and ensuring your subfloor is ready. Advantage
            Flooring’s experts will guide you through the selection process,
            helping you choose from an array of finishes, colors, and styles
            that suit your lifestyle and design preferences. Our meticulous
            preparation ensures that your new hardwood flooring not only looks
            beautiful but also lasts for years to come
          </p>
          <h1 className="text-4xl font-semibold">Expert Installation</h1>
          <p className="text-lg py-5 text-slate-600">
            At SH&H looring, we understand that every detail matters. Our
            experienced installers are trained to handle all aspects of carpet
            installation, from measuring your space accurately to ensuring
            seamless transitions between rooms. We pride ourselves on precision
            and attention to detail, so you can enjoy a beautiful, long-lasting
            carpet that enhances your home’s comfort and style.
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
            Transform Your Space with Beautiful Hardwood Installation in
            Winnipeg, MB
          </h1>
          <p className="mb-4 text-lg py-5 text-slate-600">
            Hardwood flooring is more than just a surface; it’s about creating a
            warm and inviting atmosphere that transforms your entire living
            space. Whether you’re drawn to the classic charm of oak, the rich
            tones of walnut, or the modern appeal of maple, our expert team is
            committed to making your hardwood vision a reality. With a keen eye
            for detail and a dedication to quality, we provide impeccable
            hardwood installation services tailored to your unique tastes and
            lifestyle. Experience the timeless beauty and durability of hardwood
            in your Ottawa home. From selecting the perfect style and finish to
            expert fitting and finishing, we handle every step of the process
            with care and precision. Transform your home into a stunning retreat
            with our top-notch hardwood installation services. Discover the
            convenience of having flooring professionals right in your
            community, dedicated to delivering personalized solutions that
            exceed your expectations. Let us create a breathtaking hardwood area
            that enhances both the comfort and beauty of your home.
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

export default HardwoodInstallation;
