import React from "react";
import { Link } from "react-router-dom";

const Carpet = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className="relative">
          <img
            className="w-screen h-60 object-cover opacity-100"
            src="https://live.staticflickr.com/5445/30519136084_580051599d_b.jpg"
            alt="carpet"
          />

          <h1 className="absolute text-xl  text-stone-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold">
            CARPETS <br /> Wide Variety of Styles
          </h1>

          <h2 className="absolute text-xl  text-white bg-lime-500 p-3 bottom-4 left-1/2 transform -translate-x-1/2 hover:bg-lime-700">
            <Link to="#">Browse Carpet</Link>
          </h2>
        </div>

        <div class="grid grid-cols-1 gap-5 gap-y-5 p-10 m-10 md:grid-cols-4">
          <div>
            <figure>
              <img
                className="object-cover aspect-square"
                src="https://c.pxhere.com/photos/d2/2a/carpet_texture_rough_material_fabric_floor_textile_rug-1253220.jpg!d"
              />
              <figcaption>Artist Slate</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="object-cover aspect-square"
                src="https://4.bp.blogspot.com/-aYipqafSnmY/UYIf2Iyfm-I/AAAAAAAACNI/BUE38iQcHkA/s1600/carpet23.jpg"
              />
              <figcaption>Square Patterns </figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="object-cover aspect-square"
                src="https://get.pxhere.com/photo/texture-floor-pattern-line-red-color-blue-material-textile-art-carpet-flooring-multi-color-bed-sheet-925213.jpg"
              />
              <figcaption>Colourful rays</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="object-cover aspect-square"
                src="https://get.pxhere.com/photo/orange-yellow-carpet-brown-line-flooring-pattern-plant-floor-beige-flower-1615569.jpg"
              />
              <figcaption>Coloured Bright</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="object-cover aspect-square"
                src="https://img00.deviantart.net/aac4/i/2010/289/8/4/seamless_carpet_dark_by_hhh316-d30v2ul.jpg"
              />
              <figcaption>Black box</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                className="object-cover aspect-square"
                src="https://pre00.deviantart.net/183a/th/pre/i/2010/290/3/d/seamless_carpet_texture_by_hhh316-d30xq15.jpg"
              />
              <figcaption>Knitted Lines</figcaption>
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

export default Carpet;
