import React from "react";
import { Link } from "react-router-dom";
const ResidentialPainting = () => {
  return (
    <>
      <div className="relative">
        <img
          className="w-screen h-60 object-cover"
          src="https://www.howmuchisit.org/wp-content/uploads/2018/07/certapro-painters-cost.jpg"
        />
        <h1 className="absolute text-l md:text-2xl lg:text-3xl text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">
          RESIDENTIAL PAINTING
        </h1>
        <h2 className="absolute cursor-pointer text-xs md:text-lg lg:text-xl bg-lime-500 p-3 m-auto text-white bottom-4 left-1/2 -translate-x-1/2 font-bold hover:bg-lime-700">
          <Link to="/Form">Request a free Estimate</Link>
        </h2>
      </div>
      <div className="m-auto py-7 px-16">
        <h1 className="text-4xl font-bolder">
          The Importance of Residential Painting
        </h1>
        <p className="text-sm py-5 font-thin">
          Residential Painting services focus on transforming homes through
          color, providing a fresh look that reflects your personal style and
          enhances the overall atmosphere of your space. Whether you're looking
          to update the interior or exterior of your home, a professional
          painting team can bring your vision to life with quality materials,
          skilled craftsmanship, and a keen eye for detail.
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
                Interior Painting
              </h2>
              <p className="text-sm py-5 font-thin">
                Interior painting can dramatically improve the ambiance of your
                home. From single rooms to whole-home painting, professionals
                can help you choose colors that match your aesthetic and create
                a cohesive look. High-quality paints and techniques ensure a
                smooth, even finish, with proper preparation to protect
                furniture and floors.
              </p>
            </li>
            <li>
              <h2 className="text-center text-xl font-bold">
                Exterior Painting
              </h2>
              <p className="text-sm py-5 font-thin">
                Exterior painting not only improves curb appeal but also
                protects your home from the elements. Professional painters
                prepare the surfaces by power washing, scraping, sanding, and
                priming to ensure the paint adheres properly and lasts longer
              </p>
            </li>
          </ul>
        </div>
        <div className="h-[1px] bg-black"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <img
            className="h-96 w-full py-3 md:w-1/2"
            src="https://get.pxhere.com/photo/villa-mansion-floor-home-ceiling-cottage-property-living-room-room-interior-design-hardwood-farmhouse-estate-parkland-real-estate-dining-room-luxury-home-wood-flooring-570011.jpg"
            alt="Home Painting"
          />
          <div className="ml-auto text-center md:text-right">
            <p className="mb-4">
              A residential painting team provides expertise and efficiency,
              handling all aspects of the job from start to finish. They use
              high-quality tools and techniques for lasting results, ensuring
              your home looks its best. With a professional service, you’ll save
              time, avoid the hassle of DIY painting, and have peace of mind
              knowing that the work is done safely and thoroughly.
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

export default ResidentialPainting;
