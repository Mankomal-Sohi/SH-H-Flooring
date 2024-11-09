import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import InfoForm from "./InfoForm";
const CarpetTileDetail = () => {
  const { id } = useParams();
  const imgRef = useRef(null);
  const formRef = useRef(null);

  const carpetTileData = {
    GreyTiles: {
      name: "Grey Tiles",
      image:
        "https://pixabay.com/static/uploads/photo/2016/01/14/19/40/stone-pavement-1140653_960_720.jpg",
      description: "A beautiful slate pattern for your home.",
    },
    SquareBoxes: {
      name: "Square Boxes",
      image: "https://c1.staticflickr.com/1/606/32518624735_99c227f413_b.jpg",
      description: "Stylish square patterns that fit any decor.",
    },
    ColourfulPattern: {
      name: "Colourful Pattern",
      image:
        "https://2.bp.blogspot.com/-c5de1xM7DD0/VRG3dFsdgoI/AAAAAAAAUeI/xDXRcdfuCGo/s1600/5.jpg",
      description: "Vibrant colors to brighten up your space.",
    },
    AnimatedTiles: {
      name: "Animated Tiles",
      image:
        "https://c.pxhere.com/photos/d0/5c/tiles_lasvegas_floor_casino_lumixfz1000-170016.jpg!s",
      description: "A lively carpet design for a cheerful atmosphere.",
    },
    Texturebox: {
      name: "Texture box",
      image:
        "https://3.bp.blogspot.com/-zcJD03GJxrk/UZGdW3TRwYI/AAAAAAAAHro/SSELAFbcBgI/s1600/IL+MIO+ALBERO+MOGANO+60x60+e.jpg",
      description: "A sleek, dark carpet design for modern aesthetics.",
    },
    ZigZagBox: {
      name: "Zig-Zag Box",
      image:
        "https://4.bp.blogspot.com/-aYipqafSnmY/UYIf2Iyfm-I/AAAAAAAACNI/BUE38iQcHkA/s1600/carpet23.jpg",
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

  const carpetTile = carpetTileData[id];

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
      {carpetTile ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{carpetTile.name}</h1>
          <div className="flex md:flex-row flex-col  gap-4 bg-slate-100 p-6">
            <div
              className="overflow-hidden relative max-w-xl "
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                ref={imgRef}
                src={carpetTile.image}
                alt={carpetTile.name}
                className="w-full h-auto transition-transform transform duration-300"
              />
            </div>
            <div className="mb-4">
              <p className="text-3xl mb-4 font-bold">
                {carpetTile.description}
              </p>
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
        <h2 className="text-red-500">carpet tile not found</h2>
      )}
      <div className="bg-slate-100 p-6 mt-6">
        <h3 className="text-2xl font-bold mb-4">Explore More Carpet Tiles</h3>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {Object.keys(carpetTileData).map((key) => (
            <div key={key}>
              <figure>
                <Link to={`/carpetTile/${key}`}>
                  <img
                    src={carpetTileData[key].image}
                    alt={carpetTileData[key].name}
                    className="object-cover aspect-square rounded-lg"
                  />
                </Link>
                <figcaption className="text-center mt-2">
                  {carpetTileData[key].name}
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

export default CarpetTileDetail;
