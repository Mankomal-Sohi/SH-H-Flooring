import React from "react";
import { Link } from "react-router-dom";

const Vinyl = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className="relative bg-black">
          <img
            className="w-screen h-60 object-cover opacity-80"
            src="https://shallowsky.com/tmp/hardwood-floors/img_8933.jpg"
            alt="vinyl"
          />

          <h1 className="absolute text-3xl text-slate-50 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold pb-4">
            VINYLS <br /> Wide Variety of Styles
          </h1>

          <h2 className="absolute rounded-full w-full max-w-md text-center cursor-pointer text-xl bg-black p-3 m-auto text-white bottom-4 left-1/2 -translate-x-1/2 font-bold">
            <Link to="#">Browse Vinyl</Link>
          </h2>
        </div>

        <div class="grid grid-cols-2 gap-5 gap-y-5 p-10 m-10 md:grid-cols-4">
          <div>
            <figure>
              <Link to={"/vinyl/Everett Park"}>
                <img
                  className="object-cover aspect-square"
                  src="https://get.pxhere.com/photo/background-colors-design-exterior-granite-marble-pattern-rocks-solid-stone-surface-texture-textured-tiles-royalty-free-images-1551827.jpg"
                />
              </Link>
              <figcaption>Everett Park</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/vinyl/Bedford"}>
                <img
                  className="object-cover aspect-square"
                  src="https://3.bp.blogspot.com/-MdJZ8hlDVhY/UXl97jMoxFI/AAAAAAAAHRg/xhZLL80ed1E/s1600/parquet-kambala-.png"
                />
              </Link>
              <figcaption>Bedford </figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/vinyl/CovingtonFalls"}>
                <img
                  className="object-cover aspect-square"
                  src="https://upload.wikimedia.org/wikipedia/commons/1/14/Wooden_floor.JPG"
                />
              </Link>
              <figcaption>Covington Falls</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/vinyl/FoundersTrace"}>
                <img
                  className="object-cover aspect-square"
                  src="https://c.pxhere.com/photos/56/e7/background_board_brown_floor_hardwood_planks_surface_texture-1549003.jpg!d"
                />
              </Link>
              <figcaption>Founders Trace</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/vinyl/WandersLoop"}>
                <img
                  className="object-cover aspect-square"
                  src="https://img00.deviantart.net/aac4/i/2010/289/8/4/seamless_carpet_dark_by_hhh316-d30v2ul.jpg"
                />
              </Link>
              <figcaption>WandersLoop</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/vinyl/Adventure"}>
                <img
                  className="object-cover aspect-square"
                  src="https://c1.staticflickr.com/3/2240/2048662430_fdc1d72d03_z.jpg?zz=1"
                />
              </Link>
              <figcaption>Adventure</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/vinyl/Aerial"}>
                <img
                  className="object-cover aspect-square"
                  src="https://get.pxhere.com/photo/tree-nature-wood-texture-plank-floor-trunk-old-wall-village-clear-gray-jars-figure-hardwood-boards-cracks-the-background-flooring-sawn-timber-the-structure-of-the-wood-flooring-laminate-flooring-wood-stain-jars-trunk-1205453.jpg"
                />
              </Link>
              <figcaption>Aerial</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/vinyl/Archipel"}>
                <img
                  className="object-cover aspect-square"
                  src="https://3.bp.blogspot.com/-MdJZ8hlDVhY/UXl97jMoxFI/AAAAAAAAHRg/xhZLL80ed1E/s1600/parquet-kambala-.png"
                />
              </Link>
              <figcaption>Archipel</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/vinyl/EvolutionPlank"}>
                <img
                  className="object-cover aspect-square"
                  src="https://c.pxhere.com/photos/d6/97/tiles_tile_wood_table_texture_timber_floor_decor-1002125.jpg!d"
                />
              </Link>
              <figcaption>Evolution Plank</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/vinyl/DiscoveryRidge"}>
                <img
                  className="aspect-square object-cover"
                  src="https://get.pxhere.com/photo/house-wood-wall-wood-stain-hardwood-wood-flooring-lumber-plank-flooring-floor-plywood-garapa-laminate-flooring-1457089.jpg"
                />
              </Link>
              <figcaption>Discovery Ridge</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/vinyl/GlobeTrotter"}>
                <img
                  className="aspect-square object-cover"
                  src="https://c.pxhere.com/photos/28/84/wood_texture_wooden_texture-661691.jpg!d"
                />
              </Link>
              <figcaption>Globe Trotter</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <Link to={"/vinyl/Nautika"}>
                <img
                  className="aspect-square object-cover"
                  src="https://c.pxhere.com/photos/d4/36/wood_desk_wallpaper_desktop_picture-1187816.jpg!d"
                />
              </Link>
              <figcaption>Nautika</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vinyl;
