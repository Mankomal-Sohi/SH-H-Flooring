import React from "react";
import { Link } from "react-router-dom";
const Hardwood = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className="relative bg-black">
          <img
            className="w-screen h-60 object-cover opacity-80"
            src="https://3.bp.blogspot.com/-CN2IksVGKI4/WjFBwuzOBoI/AAAAAAAAhwk/a4vMVFfxjVQ_lEediUux4YX7nbroUNJ2QCLcBGAs/s400/Wood_flooring_made_of_hickory_wood.jpg"
            alt="hardwood"
          />

          <h1 className="absolute text-3xl text-slate-50 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold pb-4">
            Hardwood <br /> Wide Variety of Styles
          </h1>

          <h2 className="absolute rounded-full w-full max-w-md text-center cursor-pointer text-xl bg-black p-3 m-auto text-white bottom-4 left-1/2 -translate-x-1/2 font-bold">
            <Link to="#">Browse Hardwood</Link>
          </h2>
        </div>

        <div class="grid grid-cols-2 gap-5 gap-y-5 p-10 m-10 md:grid-cols-4">
          <div>
            <figure>
              <Link to={"/hardwood/SebastianIsle"}>
                <img
                  className="object-cover aspect-square"
                  src="https://c.pxhere.com/photos/1a/6f/antique_wood_floor_wood_floors_oak_texture_pattern_wooden-1050432.jpg!d"
                />
              </Link>
              <figcaption>Sebastian Isle</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/hardwood/WestportCape"}>
                <img
                  className="object-cover aspect-square"
                  src="https://c.pxhere.com/photos/65/83/trees_wood_yellow_wood_oak_sandalwood_teak_wood_grain-1161838.jpg!s"
                />
              </Link>
              <figcaption>Westport Cape</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/hardwood/CrosbyCove"}>
                <img
                  className="object-cover aspect-square"
                  src="https://c.pxhere.com/photos/78/ba/boards_wall_boards_wood_wooden_wall_wall_wooden_boards_old_weathered-1215433.jpg!d"
                />
              </Link>
              <figcaption>Crosby Cove</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/hardwood/GinghamOaks"}>
                <img
                  className="object-cover aspect-square"
                  src="https://live.staticflickr.com/7399/9199264443_e9f21517ec_b.jpg"
                />
              </Link>
              <figcaption>Gingham Oaks</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/hardwood/Hilltop"}>
                <img
                  className="object-cover aspect-square"
                  src="https://c.pxhere.com/photos/eb/78/trees_wood_yellow_wood_oak_sandalwood_teak_wood_grain-1161834.jpg!d"
                />
              </Link>
              <figcaption>Hilltop</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/hardwood/Regale"}>
                <img
                  className="object-cover aspect-square"
                  src="https://c.pxhere.com/photos/40/d0/wood_wood_grain_texture_knot_timber_carpentry_wood_texture_smooth-819121.jpg!s"
                />
              </Link>
              <figcaption>Regale</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/hardwood/Symphony"}>
                <img
                  className="object-cover aspect-square"
                  src="https://get.pxhere.com/photo/board-wood-plank-floor-brown-lumber-wood-floor-background-hardwood-wooden-oak-backdrop-wood-background-flooring-plywood-wood-grain-wood-flooring-laminate-flooring-wood-stain-honey-oak-1228182.jpg"
                />
              </Link>
              <figcaption>Symphony</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/hardwood/BespokeCollection"}>
                <img
                  className="object-cover aspect-square"
                  src="https://c.pxhere.com/photos/7c/a0/chestnut_bark_tree_organic_agriculture_outdoors_environment_trunk-994106.jpg!d"
                />
              </Link>
              <figcaption>Bespoke Collection</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/hardwood/Nouveau6"}>
                <img
                  className="object-cover aspect-square"
                  src="https://c.pxhere.com/photos/18/20/shingle_wood_woods_wood_shingle_panel_facade_cladding_wall_alpine-943550.jpg!d"
                />
              </Link>
              <figcaption>Nouveau 6</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/hardwood/Nouveau7"}>
                <img
                  className="aspect-square object-cover"
                  src="https://c.pxhere.com/photos/7d/6f/rust_rusted_texture_pattern_metal_steel_iron_rough-1279974.jpg!s"
                />
              </Link>
              <figcaption>Nouveau 7</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/hardwood/Nouveau8"}>
                <img
                  className="aspect-square object-cover"
                  src="https://c.pxhere.com/photos/d9/00/wood_wooden_wood_texture_wood_planks-1051345.jpg!d"
                />
              </Link>
              <figcaption>Nouveau 8</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/hardwood/NanoPacific"}>
                <img
                  className="aspect-square object-cover"
                  src="https://live.staticflickr.com/7303/13673414474_a0c583dbfb.jpg"
                />
              </Link>
              <figcaption>Nano Pacific</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hardwood;
