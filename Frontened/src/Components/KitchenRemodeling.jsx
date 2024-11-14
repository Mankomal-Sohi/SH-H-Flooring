import React from "react";
import { Link } from "react-router-dom";

const KitchenRemodeling = () => {
  return (
    <>
      <div className="relative">
        <img
          className="w-screen h-60 object-cover"
          src="https://p1.pxfuel.com/preview/71/599/650/kitchen-real-estate-design-residential.jpg"
        />
        <h1 className="absolute text-l md:text-2xl lg:text-3xl text-slate-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">
          KITCHEN REMODELING
        </h1>
        <h2 className="absolute cursor-pointer text-xs md:text-lg lg:text-xl bg-lime-500 p-3 m-auto text-white bottom-4 left-1/2 -translate-x-1/2 font-bold hover:bg-lime-700">
          <Link to="/Form">Request a free Estimate</Link>
        </h2>
      </div>
      <div className="m-auto py-7 px-16">
        <h1 className="text-4xl font-bolder">
          Kitchen Remodeling: <br />
          Redesign Your Cooking Area
        </h1>
        <p className="text-sm py-5 font-thin">
          Welcome to Kitchen Remodeling, your go-to destination for transforming
          your cooking space into the kitchen of your dreams. Our expert team
          specializes in providing comprehensive kitchen remodeling services
          tailored to fit your unique style, needs, and budget.Whether you're
          looking to modernize your layout, upgrade appliances, or completely
          revamp the aesthetics of your kitchen, we are here to bring your
          vision to life.
        </p>
        <p className="text-sm py-5 font-thin">
          We offer a wide range of services, including custom cabinetry,
          countertop installation, flooring, lighting solutions, and much more.
          With a focus on quality craftsmanship and attention to detail, our
          team will guide you through every step of the remodeling process —
          from initial design concepts to the final finishing touches. At
          Kitchen Remodeling, we believe the kitchen is the heart of your home,
          and we are committed to creating a space that not only meets your
          functional needs but also enhances your overall lifestyle. Whether
          it's a small kitchen upgrade or a complete overhaul, our design and
          construction professionals will work closely with you to ensure a
          seamless remodeling experience.
        </p>
        <p className="py-5">
          Start your kitchen transformation today! Visit our website to explore
          our portfolio, learn more about our services, and schedule a free
          consultation. Let us help you create a kitchen that combines beauty,
          efficiency, and comfort — the perfect space for cooking, gathering,
          and enjoying time with family.
        </p>
        <div className="h-[1px] bg-black"></div>

        <div className="py-5">
          <ul>
            <li>
              <h2 className="text-center text-xl font-bold">
                Custom Cabinetry
              </h2>
              <p className="text-sm py-5 font-thin">
                Our bespoke cabinets are tailored to meet your needs, offering a
                variety of materials, finishes, and hardware options to match
                your style. Whether you prefer the classic warmth of natural
                wood or the sleek, contemporary look of high-gloss finishes, our
                expert craftsmen build cabinets that not only look stunning but
                provide optimal storage solutions for your kitchen essentials.
              </p>
            </li>
            <li>
              <h2 className="text-center text-xl font-bold">Kitchen Islands</h2>
              <p className="text-sm py-5 font-thin">
                A well-designed kitchen island can become the centerpiece of
                your cooking space. We design multi-functional islands that
                provide additional countertop space, integrated storage, and
                seating options for casual dining. Whether you want a compact
                island for smaller kitchens or a large, multifunctional hub, we
                can customize it to fit your layout perfectly.
              </p>
            </li>
            <li>
              <h2 className="text-center text-xl font-bold">
                Breakfast Nooks and Seating
              </h2>
              <p className="text-sm py-5 font-thin">
                Create a cozy, inviting corner with our custom breakfast nooks,
                designed for comfort and practicality. With built-in seating,
                storage, and beautiful upholstery options, these nooks are
                perfect for enjoying casual meals or morning coffee with your
                family. We also offer stylish bar stools and chairs that
                complement your kitchen’s design while providing comfortable
                seating.
              </p>
            </li>
          </ul>
        </div>
        <div className="h-[1px] bg-black"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center ">
          <img
            className="h-96 w-full py-3 md:w-1/2"
            src="https://cdn.pixabay.com/photo/2013/08/15/10/39/interior-furniture-172705_960_720.jpg"
            alt="kitchen furniture"
          />
          <div className="ml-auto text-center md:text-right">
            <p className="mb-4">
              Let Kitchen Remodeling help you design and install the perfect
              furniture that blends seamlessly with your kitchen’s overall
              aesthetic while enhancing its practicality. Browse our extensive
              portfolio on our website, and contact us today to start planning
              your kitchen renovation with tailored furniture solutions!
            </p>
            <button className="bg-lime-500 p-3 text-white  hover:bg-lime-700">
              <Link to="/Form">Request a free Estimate</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default KitchenRemodeling;
