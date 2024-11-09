import React from "react";
import { Link } from "react-router-dom";
import InfoForm from "./InfoForm";
const Paint = () => {
  return (
    <>
      <div className="relative bg-black">
        <img
          className="w-screen h-72 object-cover opacity-80"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Tongren-thangka-paint.jpg"
        />
        <h1 className="absolute text-3xl text-slate-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">
          PAINT
        </h1>
        <h2 className="absolute rounded-full w-full max-w-md text-center cursor-pointer text-xl bg-black p-3 m-auto text-white bottom-4 left-1/2 -translate-x-1/2 font-bold">
          <Link to="/Form">Request a free estimate !!</Link>
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 p-4 justify-items-end">
        <div className="m-auto py-7 px-16">
          <h1 className="text-4xl font-bold">Our Paint Products</h1>
          <p className="text-lg py-5 text-slate-600">
            SH&H Flooring Company is a leading supplier and installer of premium
            flooring solutions, offering exclusive pricing for builders,
            contractors, and homeowners across Ontario. Our products are
            available for pick-up at our locations in Toronto and Ottawa, with
            delivery options available upon request.
          </p>
          <h1 className="text-4xl font-semibold">SH&H Professional Primer</h1>
          <p className="text-lg py-5 text-slate-600">
            A high-performance primer and sealer, designed to enhance the
            adhesion of new flooring installations. This 100% acrylic latex
            primer ensures a smooth, durable foundation for a flawless flooring
            application, whether you're installing hardwood, vinyl, or tile.
            Ultra-hiding and low-odour, it provides superior coverage for both
            interior and exterior projects.
          </p>
          <h1 className="text-4xl font-semibold">Product Specification</h1>
          <p className="text-lg py-5 text-slate-600">
            <ul>
              <li>
                <strong>Prime Component:</strong> Latex
              </li>
              <li>
                <strong>Color:</strong> White
              </li>
              <li>
                <strong>Finish:</strong> Matte
              </li>
              <li>
                <strong>VOC:</strong> 72 g/L
              </li>
              <li>
                <strong>Size:</strong> 18.9 L
              </li>
              <li>
                <strong>Coverage Area:</strong> 440 to 520 sq. ft. per 3.78 L
              </li>
              <li>
                <strong>Interior/Exterior:</strong> Interior and Exterior
              </li>
              <li>
                <strong>Type:</strong> Primer-sealer
              </li>
            </ul>
          </p>
          <h1 className="text-4xl font-semibold">Cost</h1>
          <p className="text-lg py-5 text-slate-600">
            $95 pls HST | Cost comparison: $170 at big box stores
          </p>
        </div>
        <div className="bg-gray-200 w-full h-full max-w-lg max-h-fit mr-3">
          <InfoForm />
        </div>
      </div>
      <div className="h-[1px] bg-black"></div>
      <div className="flex flex-col md:flex-row items-center m-auto py-7 px-16">
        <div className="w-full md:w-1/2 px-8">
          <img
            className="w-full h-auto  object-cover opacity-80"
            src="https://get.pxhere.com/photo/wall-color-paint-blue-black-painting-roller-renovate-918406.jpg"
            alt="SH&H Semi-Gloss Paint"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 mb-8">
          <h1 className="text-2xl font-bolder mb-2 font-semibold">
            SH&H Semi-Gloss Paint
          </h1>
          <p className="mb-4 text-lg py-5 text-slate-600">
            A self-sealing, high-quality latex finish designed for interior
            walls and ceilings. This product is easy to apply, offering a high
            viscosity for excellent coverage and hiding power. Dries quickly
            with minimal odour, leaving a smooth semi-gloss finish that is both
            durable and attractive. As a tintable base, it requires the addition
            of a colourant, which you can choose through our convenient colour
            selector.
          </p>
          <h1 className="text-2xl font-bolder mb-2 font-semibold">
            Product Specifications
          </h1>
          <ul className="text-lg py-5 text-slate-600">
            <li>
              <strong>Prime Component:</strong> Latex
            </li>
            <li>
              <strong>Color:</strong> White and pastel
            </li>
            <li>
              <strong>Finish:</strong> Semi-gloss
            </li>
            <li>
              <strong>VOC:</strong> 142.4 g/L
            </li>
            <li>
              <strong>Size:</strong> 18.5 L
            </li>
            <li>
              <strong>Coverage Area:</strong> 480 to 560 sq. ft. per 3.78 L
            </li>
            <li>
              <strong>Base:</strong> Base 1
            </li>
            <li>
              <strong>Interior/Exterior:</strong> Interior
            </li>
            <li>
              <strong>Type:</strong> Tintable base
            </li>
            <li>
              <strong>Model:</strong> Semi-Pro
            </li>
          </ul>
          <h1 className="text-4xl font-semibold">Cost</h1>
          <p className="text-lg py-5 text-slate-600">
            $75 pls HST | Cost comparison: $165 at big box stores
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

export default Paint;
