import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import InfoForm from "./InfoForm";
const CarpetDetail = () => {
  const { id } = useParams();
  const imgRef = useRef(null);
  const formRef = useRef(null);

  const carpetData = {
    ArtistSlate: {
      name: "Artist Slate",
      image:
        "https://c.pxhere.com/photos/d2/2a/carpet_texture_rough_material_fabric_floor_textile_rug-1253220.jpg!d",
      description: "A beautiful slate pattern for your home.",
    },
    SquarePatterns: {
      name: "Square Patterns",
      image:
        "https://4.bp.blogspot.com/-aYipqafSnmY/UYIf2Iyfm-I/AAAAAAAACNI/BUE38iQcHkA/s1600/carpet23.jpg",
      description: "Stylish square patterns that fit any decor.",
    },
    ColourfulRays: {
      name: "Colourful Rays",
      image:
        "https://get.pxhere.com/photo/texture-floor-pattern-line-red-color-blue-material-textile-art-carpet-flooring-multi-color-bed-sheet-925213.jpg",
      description: "Vibrant colors to brighten up your space.",
    },
    ColouredBright: {
      name: "Coloured Bright",
      image:
        "https://get.pxhere.com/photo/orange-yellow-carpet-brown-line-flooring-pattern-plant-floor-beige-flower-1615569.jpg",
      description: "A lively carpet design for a cheerful atmosphere.",
    },
    BlackBox: {
      name: "Black Box",
      image:
        "https://img00.deviantart.net/aac4/i/2010/289/8/4/seamless_carpet_dark_by_hhh316-d30v2ul.jpg",
      description: "A sleek, dark carpet design for modern aesthetics.",
    },
    KnittedLines: {
      name: "Knitted Lines",
      image:
        "https://pre00.deviantart.net/183a/th/pre/i/2010/290/3/d/seamless_carpet_texture_by_hhh316-d30xq15.jpg",
      description: "Textured lines that add depth to your flooring.",
    },
    TraditionalFeelz: {
      name: "Traditional Feelz",
      image: "https://live.staticflickr.com/2728/4057575737_9fc2cc0fdf_b.jpg",
      description: "Classic designs for a timeless look.",
    },
    WoodenTexture: {
      name: "Wooden Texture",
      image:
        "https://3.bp.blogspot.com/-MdJZ8hlDVhY/UXl97jMoxFI/AAAAAAAAHRg/xhZLL80ed1E/s1600/parquet-kambala-.png",
      description: "Wood-inspired textures for a cozy feel.",
    },
    RosyFlowers: {
      name: "Rosy Flowers",
      image:
        "https://get.pxhere.com/photo/plant-texture-flower-purple-petal-pattern-red-produce-pink-fabric-crochet-textile-shrub-carpet-magenta-fibers-tissue-woven-flooring-flowering-plant-land-plant-718218.jpg",
      description: "Bright floral patterns to liven up any space.",
    },
    PatternMatches: {
      name: "Pattern Matches",
      image:
        "https://cdn.pixabay.com/photo/2014/04/05/11/22/red-carpet-315459_960_720.jpg",
      description: "Patterns that complement each other beautifully.",
    },
    RuggedDesign: {
      name: "Rugged Design",
      image:
        "https://p0.pikist.com/photos/645/901/carpet-orient-pattern-oriental-carpet-retired-carpet-dealers-turkey-persian-rug-carpet-weaving-center.jpg",
      description: "A rugged design that stands out in any room.",
    },
    UniqueBorders: {
      name: "Unique Borders",
      image:
        "https://p0.pikist.com/photos/453/206/rhodes-rugs-carpets-rug-carpet-texture-textile-pattern-interior.jpg",
      description: "Distinctive borders that add character.",
    },
  };

  const carpet = carpetData[id];

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const { width, height } = imgRef.current.getBoundingClientRect();
    const x = (offsetX / width) * 100;
    const y = (offsetY / height) * 100;

    imgRef.current.style.transformOrigin = `${x}% ${y}%`;
    imgRef.current.classList.add("zoom");
  };

  const handleMouseLeave = () => {
    imgRef.current.classList.remove("zoom");
  };

  const handleRequestMoreInfo = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto p-6">
      {carpet ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{carpet.name}</h1>
          <div className="flex md:flex-row flex-col  gap-4 bg-slate-100 p-6">
            <div
              className="overflow-hidden relative max-w-xl "
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                ref={imgRef}
                src={carpet.image}
                alt={carpet.name}
                className="w-full h-auto transition-transform transform duration-300"
              />
            </div>
            <div className="mb-4">
              <p className="text-3xl mb-4 font-bold">{carpet.description}</p>
              <h2 className="text-xl font-semibold">Call For Price</h2>
              <button
                className="mt-2 bg-black text-white py-2 px-4 rounded-xl hover:bg-green-700"
                onClick={handleRequestMoreInfo}
              >
                Request more info
              </button>
            </div>
          </div>
        </>
      ) : (
        <h2 className="text-red-500">carpet not found</h2>
      )}
      \
      <div className="bg-slate-100 p-6 mt-6">
        <h3 className="text-2xl font-bold mb-4">Explore More Carpets</h3>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {Object.keys(carpetData).map((key) => (
            <div key={key}>
              <figure>
                <Link to={`/carpet/${key}`}>
                  <img
                    src={carpetData[key].image}
                    alt={carpetData[key].name}
                    className="object-cover aspect-square rounded-lg"
                  />
                </Link>
                <figcaption className="text-center mt-2">
                  {carpetData[key].name}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      <div ref={formRef} className="infoForm bg-slate-100">
        <InfoForm />
      </div>
    </div>
  );
};

export default CarpetDetail;
