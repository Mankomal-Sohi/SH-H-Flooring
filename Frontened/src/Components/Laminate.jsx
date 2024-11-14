import React from "react";
import { Link } from "react-router-dom";

const Laminate = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className="relative bg-black">
          <img
            className="w-screen h-60 object-cover opacity-80"
            src="https://4.bp.blogspot.com/-TTj1265bjew/Vhwk4pOgxOI/AAAAAAAAAf4/B1kPwLQaoPc/s1600/laminate.jpg"
            alt="laminate"
          />

          <h1 className="absolute text-3xl text-slate-50 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold pb-4">
            Laminate <br /> Wide Variety of Styles
          </h1>

          <h2 className="absolute rounded-full w-full max-w-md text-center cursor-pointer text-xl bg-black p-3 m-auto text-white bottom-4 left-1/2 -translate-x-1/2 font-bold">
            <Link to="#">Browse Laminate</Link>
          </h2>
        </div>

        <div class="grid grid-cols-2 gap-5 gap-y-5 p-10 m-10 md:grid-cols-4">
          <div>
            <figure>
              <Link to={"/laminate/HamptonVilla"}>
                <img
                  className="object-cover aspect-square"
                  src="https://1.bp.blogspot.com/-jvxtDvxXVGg/YJAOv9S9VeI/AAAAAAAEgQ0/pciQimbqaK8smVodccfy-XtE1PswoNIGwCLcBGAsYHQ/s627/matt1.PNG"
                />
              </Link>
              <figcaption>Hampton Villa</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/laminate/LenoxPark"}>
                <img
                  className="object-cover aspect-square"
                  src="https://live.staticflickr.com/2174/2212642020_010754be3c.jpg"
                />
              </Link>
              <figcaption>Lenox Park </figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/laminate/AdlerCreek"}>
                <img
                  className="object-cover aspect-square"
                  src="https://c.pxhere.com/photos/6f/b9/wood_texture_background_hardware_store_grain_structure_wood_texture_pattern-619986.jpg!d"
                />
              </Link>
              <figcaption>Adler Creek</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/laminate/AntiqueCraft"}>
                <img
                  className="object-cover aspect-square"
                  src="https://live.staticflickr.com/3177/2766291800_0cb79cab9f.jpg"
                />
              </Link>
              <figcaption>Antique Craft</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/laminate/Bellente"}>
                <img
                  className="object-cover aspect-square"
                  src="https://freebie.photography/background/laminate_floor.jpg"
                />
              </Link>
              <figcaption>Bellente</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/laminate/CastleBriar"}>
                <img
                  className="object-cover aspect-square"
                  src="https://1.bp.blogspot.com/-jvxtDvxXVGg/YJAOv9S9VeI/AAAAAAAEgQ0/pciQimbqaK8smVodccfy-XtE1PswoNIGwCLcBGAsYHQ/s627/matt1.PNG"
                />
              </Link>
              <figcaption>Castle Briar</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/laminate/Cypresta"}>
                <img
                  className="object-cover aspect-square"
                  src="https://get.pxhere.com/photo/wood-plank-floor-roof-beam-ceiling-lumber-hardwood-flooring-plywood-wood-flooring-outdoor-structure-laminate-flooring-wood-stain-4606.jpg"
                />
              </Link>
              <figcaption>Cypresta</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/laminate/Elderwood"}>
                <img
                  className="object-cover aspect-square"
                  src="https://c.pxhere.com/photos/31/b5/wood_texture_grain_brown_pattern_wood_texture_textures_old-721806.jpg!d"
                />
              </Link>
              <figcaption>Elderwood</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/laminate/Hartwick"}>
                <img
                  className="object-cover aspect-square"
                  src="https://c.pxhere.com/photos/65/9b/background_blank_space_copy_space_design_space_isolated_mock_up_mockup_space-1607977.jpg!d"
                />
              </Link>
              <figcaption>Hartwick</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/laminate/Sterlington"}>
                <img
                  className="aspect-square object-cover"
                  src="https://get.pxhere.com/photo/sand-wood-texture-floor-wall-pattern-brown-tile-grunge-material-surface-cracked-textured-textile-beige-wallpaper-flooring-plywood-wood-flooring-laminate-flooring-764948.jpg"
                />
              </Link>
              <figcaption>Sterlington</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/laminate/WesternRow"}>
                <img
                  className="aspect-square object-cover"
                  src="https://get.pxhere.com/photo/house-wood-wall-wood-stain-hardwood-wood-flooring-lumber-plank-flooring-floor-plywood-garapa-laminate-flooring-1457089.jpg"
                />
              </Link>
              <figcaption>Western Row</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/laminate/MiramarShores"}>
                <img
                  className="aspect-square object-cover"
                  src="https://c.pxhere.com/photos/28/84/wood_texture_wooden_texture-661691.jpg!d"
                />
              </Link>
              <figcaption>Miramar Shores</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Laminate;
