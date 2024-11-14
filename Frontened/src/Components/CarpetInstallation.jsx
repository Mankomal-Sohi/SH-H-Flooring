import React from "react";
import { Link } from "react-router-dom";
import InfoForm from "./InfoForm";
const CarpetInstallation = () => {
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
          <h1 className="text-4xl font-bold">Carpet Supply & Installation:</h1>
          <p className="text-lg py-5 text-slate-600">
            Are you looking to enhance the comfort and aesthetics of your home
            with new carpet? Whether you’re installing a fresh carpet or
            replacing an old one, it’s crucial to do it right. Carpet
            installation is a significant investment, and you want to avoid
            costly mistakes that could lead to additional expenses. Call
            Advantage Flooring, your trusted carpet installation experts. With
            over a decade of experience, we are committed to delivering
            exceptional results. Our skilled installers specialize in various
            carpet types, ensuring a plush and stylish finish that complements
            your space.
          </p>
          <h1 className="text-4xl font-semibold">
            Carpet Padding and Preparation
          </h1>
          <p className="text-lg py-5 text-slate-600">
            Before installing your new carpet, proper preparation is key. This
            includes selecting the right carpet padding, which provides
            cushioning, insulation, and extends the life of your carpet.
            Advantage Flooring’s team of experts will help you choose the best
            padding suited for your specific carpet type and your lifestyle.
            Whether you need padding for high-traffic areas or a softer feel for
            your bedrooms, we’ve got you covered. Our meticulous approach
            ensures that your new carpet not only looks great but also feels
            amazing underfoot.
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
            Transform Your Space with Luxurious Carpet Installation in
            Winnipeg,MB
          </h1>
          <p className="mb-4 text-lg py-5 text-slate-600">
            Carpet installation is more than just adding a soft surface; it’s
            about creating an inviting atmosphere that elevates your entire
            living space. Whether you prefer the plush comfort of thick pile,
            the durability of berber, or the elegant look of patterned carpets,
            our expert team is dedicated to bringing your carpet vision to life.
            With a keen eye for detail and a commitment to quality, we deliver
            impeccable carpet installation services tailored to your unique
            tastes and lifestyle. Experience the warmth and comfort of carpet in
            your Ottawa home. Our skilled installers specialize in carpet
            installation, ensuring a seamless fit that enhances your space's
            aesthetics. From choosing the perfect style and color to expert
            fitting and finishing, we handle every step of the process with
            precision and care. Transform your home into a cozy retreat with our
            top-notch carpet installation services. Discover the convenience of
            having carpet installation professionals right in your community. We
            provide exceptional carpet installation services near you, bringing
            the luxury of custom flooring to your doorstep. Our team is
            dedicated to delivering personalized solutions that surpass your
            expectations. Let us create a stunning carpeted area that enhances
            both the comfort and beauty of your home.
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

export default CarpetInstallation;
