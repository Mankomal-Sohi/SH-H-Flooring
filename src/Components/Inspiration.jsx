import React from "react";
import { Link } from "react-router-dom";
const Inspiration = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl text-center font-bold py-6">
          Reimagine your Space !!
        </h1>
        <h2 className="text-xl text-center font-thin">
          GET INSPIRED BY OUR BEAUTIFUL GALLERY..
        </h2>
        <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 my-3 mx-14 py-6">
          <div className="relative">
            <figure>
              <img
                className="object-cover aspect-square h-80 w-72"
                src="https://www.chestnutflooring.ca/wp-content/uploads/2021/05/Ambiances-Engineered-Hardwood-Flooring-Collection-1024x663.jpg"
                alt="Carpet"
              />
              <figcaption className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <Link
                  to="/Carpet"
                  className="bg-white border-solid p-3 font-semibold hover:text-green-500 w-48 block "
                >
                  CARPET
                </Link>
              </figcaption>
            </figure>
          </div>
          <div className="relative">
            <figure>
              <img
                className="object-cover aspect-square h-80 w-72"
                src="https://citytile.ca/wp-content/uploads/2018/09/Armstrong_LVT_2013_1334_JatobaMahoganyWEB.jpg"
                alt="CarpetTile"
              />
              <figcaption className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <Link
                  to="/CarpetTile"
                  className="bg-white  border-solid p-3 font-semibold hover:text-green-500 w-48 block"
                >
                  CARPET TILE
                </Link>
              </figcaption>
            </figure>
          </div>
          <div className="relative">
            <figure>
              <img
                className="object-cover aspect-square h-80 w-72"
                src="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?cs=srgb&dl=white-wooden-modular-kitchen-1643384.jpg&fm=jpg"
                alt="Kitchen"
              />
              <figcaption className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <Link
                  to="/KitchenRemodeling"
                  className="bg-white  border-solid p-3 font-semibold hover:text-green-500 w-48 block"
                >
                  KITCHEN
                </Link>
              </figcaption>
            </figure>
          </div>
          <div className="relative">
            <figure>
              <img
                className="object-cover aspect-square h-80 w-72"
                src="https://i.pinimg.com/originals/e1/c6/01/e1c601bb3a833ddf4a7801b23067295d.jpg"
                alt="Paint"
              />
              <figcaption className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <Link
                  to="/ResidentialPainting"
                  className="bg-white  border-solid p-3 font-semibold hover:text-green-500 w-48 block"
                >
                  PAINT
                </Link>
              </figcaption>
            </figure>
          </div>
          <div className="relative">
            <figure>
              <img
                className="object-cover aspect-square h-80 w-72"
                src="https://get.pxhere.com/photo/floor-interior-home-counter-ceramic-property-sink-room-countertop-interior-design-bathroom-faucet-mirror-flooring-704223.jpg"
                alt="bathroom"
              />
              <figcaption className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <Link
                  to="/BathroomRemodeling"
                  className="bg-white  border-solid p-3 font-semibold hover:text-green-500 w-48 block"
                >
                  BATHROOM
                </Link>
              </figcaption>
            </figure>
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

export default Inspiration;
