import React from "react";
import { Link } from "react-router-dom";

const BathroomRemodeling = () => {
  return (
    <>
      <div className="relative">
        <img
          className="w-screen h-60 object-cover"
          src="https://images.pexels.com/photos/496706/pexels-photo-496706.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
        />
        <h1 className="absolute text-l md:text-2xl lg:text-3xl text-slate-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">
          BATHROOM REMODELING
        </h1>
        <h2 className="absolute text-xs md:text-lg lg:text-xl  text-white bg-lime-500 p-3 m-auto bottom-4 left-1/2 -translate-x-1/2 font-bold hover:bg-lime-700">
          <Link to="/Form">Request a free Estimate</Link>
        </h2>
      </div>
      <div className="m-auto py-7 px-16">
        <h1 className="text-4xl font-bolder">
          Bathroom Remodeling: <br />
          Redesign Your Bathing Area
        </h1>
        <p className="text-sm py-5 font-thin">
          At Bathroom Remodeling, we specialize in transforming your bathroom
          into a luxurious and functional space that suits your style and meets
          your needs. Whether you're looking for a simple upgrade or a complete
          redesign, our expert team provides personalized services to enhance
          the beauty and efficiency of your bathroom.
        </p>
        <p className="text-sm py-5 font-thin">
          We offer a wide range of bathroom remodeling solutions, including
          custom vanities, high-quality countertops, modern fixtures, stylish
          tiling, and innovative storage options. Our team focuses on delivering
          top-notch craftsmanship while ensuring that your new bathroom offers
          comfort, convenience, and timeless appeal. From walk-in showers to
          freestanding bathtubs and everything in between, we’ll work closely
          with you to design a space that reflects your preferences. With our
          commitment to quality and attention to detail, you can trust us to
          handle every aspect of your bathroom renovation, from the initial
          consultation to the final touches.
        </p>
        <p className="py-5">
          Ready to upgrade your bathroom? Visit our website to explore our
          portfolio and services. Contact us today to schedule a free
          consultation, and let us help you create the perfect blend of luxury
          and practicality in your bathroom!
        </p>
        <div className="h-[1px] bg-black"></div>

        <div className="py-5">
          <ul>
            <li>
              <h2 className="text-center text-xl font-bold">Custom Vanities</h2>
              <p className="text-sm py-5 font-thin">
                Our custom vanities combine beauty with functionality, offering
                ample storage and countertop space for your essentials. Choose
                from a variety of finishes, materials, and configurations to
                perfectly match your bathroom’s design. From sleek, modern
                floating vanities to classic, freestanding styles, we provide
                options that fit every taste and size requirement.
              </p>
            </li>
            <li>
              <h2 className="text-center text-xl font-bold">
                Built-In Storage Solutions
              </h2>
              <p className="text-sm py-5 font-thin">
                Keep your bathroom organized and clutter-free with our
                innovative built-in storage units. Whether you need discreet
                shelving, cabinets with soft-close drawers, or pull-out
                compartments, we design storage solutions that make the most of
                your space without compromising style.
              </p>
            </li>
            <li>
              <h2 className="text-center text-xl font-bold">
                Luxury Mirrors and Cabinets
              </h2>
              <p className="text-sm py-5 font-thin">
                Add a touch of elegance with our custom mirrors and mirrored
                cabinets. Designed to blend seamlessly with your vanity or wall
                decor, our mirrors can be framed or frameless, and our mirrored
                cabinets offer hidden storage while adding light and openness to
                your bathroom.
              </p>
            </li>
          </ul>
        </div>
        <div className="h-[1px] bg-black"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <img
            className="h-96 w-full md:w-1/2 py-3"
            src="https://cdn.pixabay.com/photo/2017/09/15/15/22/bathroom-2752475_960_720.jpg"
            alt="kitchen furniture"
          />
          <div className="ml-auto text-center md:text-right">
            <p className="mb-4">
              Let Bathroom Remodeling help you design and install the perfect
              furniture that complements your bathroom’s design while offering
              practical solutions for everyday use. Explore our extensive range
              of custom furniture options and contact us today to start planning
              your bathroom renovation!
            </p>
            <button className="bg-lime-500 p-3 text-white hover:bg-lime-700">
              <Link to="/Form">Request a free Estimate</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BathroomRemodeling;
