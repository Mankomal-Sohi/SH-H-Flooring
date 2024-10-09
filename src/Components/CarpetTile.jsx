import React from "react";
import { Link } from "react-router-dom";

const CarpetTile = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className="relative">
          <img
            className="w-screen h-60 object-cover opacity-100"
            src="https://get.pxhere.com/photo/wood-floor-ceiling-pattern-line-tile-art-design-wallpaper-flooring-52224.jpg"
            alt="carpetTile"
          />

          <h1 className="absolute text-xl  text-stone-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold">
            CARPET TILES <br /> Explore new Styles
          </h1>

          <h2 className="absolute text-xl  text-white bg-lime-500 p-3 bottom-4 left-1/2 transform -translate-x-1/2 hover:bg-lime-700">
            <Link to="#">Browse Carpet Tiles</Link>
          </h2>
        </div>

        <div class="grid grid-cols-1 gap-5 gap-y-5 p-10 m-10 md:grid-cols-4">
          <div>
            <figure>
              <img
                className="object-cover aspect-square"
                src="https://pixabay.com/static/uploads/photo/2016/01/14/19/40/stone-pavement-1140653_960_720.jpg"
              />
              <figcaption>Grey Tiles</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="object-cover aspect-square"
                src="https://c1.staticflickr.com/1/606/32518624735_99c227f413_b.jpg"
              />
              <figcaption>Square Boxes </figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="object-cover aspect-square"
                src="https://2.bp.blogspot.com/-c5de1xM7DD0/VRG3dFsdgoI/AAAAAAAAUeI/xDXRcdfuCGo/s1600/5.jpg"
              />
              <figcaption>Colourful Pattern</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="object-cover aspect-square"
                src="https://c.pxhere.com/photos/d0/5c/tiles_lasvegas_floor_casino_lumixfz1000-170016.jpg!s"
              />
              <figcaption>Animated Tiles</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="object-cover aspect-square"
                src="https://3.bp.blogspot.com/-zcJD03GJxrk/UZGdW3TRwYI/AAAAAAAAHro/SSELAFbcBgI/s1600/IL+MIO+ALBERO+MOGANO+60x60+e.jpg"
              />
              <figcaption>Texture box</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="object-cover aspect-square"
                src="https://4.bp.blogspot.com/-aYipqafSnmY/UYIf2Iyfm-I/AAAAAAAACNI/BUE38iQcHkA/s1600/carpet23.jpg"
              />
              <figcaption>Zig-Zag Box</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="object-cover aspect-square"
                src="https://live.staticflickr.com/2728/4057575737_9fc2cc0fdf_b.jpg"
              />
              <figcaption>Traditional Feelz</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="object-cover aspect-square"
                src="https://3.bp.blogspot.com/-MdJZ8hlDVhY/UXl97jMoxFI/AAAAAAAAHRg/xhZLL80ed1E/s1600/parquet-kambala-.png"
              />
              <figcaption>Wooden Texture</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="object-cover aspect-square"
                src="https://get.pxhere.com/photo/plant-texture-flower-purple-petal-pattern-red-produce-pink-fabric-crochet-textile-shrub-carpet-magenta-fibers-tissue-woven-flooring-flowering-plant-land-plant-718218.jpg"
              />
              <figcaption>Rosy Flowers</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="aspect-square object-cover"
                src="https://cdn.pixabay.com/photo/2014/04/05/11/22/red-carpet-315459_960_720.jpg"
              />
              <figcaption>Pattern Matches</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="aspect-square object-cover"
                src="https://p0.pikist.com/photos/645/901/carpet-orient-pattern-oriental-carpet-retired-carpet-dealers-turkey-persian-rug-carpet-weaving-center.jpg"
              />
              <figcaption>Rugged Design</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="aspect-square object-cover"
                src="https://p0.pikist.com/photos/453/206/rhodes-rugs-carpets-rug-carpet-texture-textile-pattern-interior.jpg"
              />
              <figcaption>Unique Borders</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarpetTile;
