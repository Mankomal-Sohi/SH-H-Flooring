import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import InfoForm from "./InfoForm";
const HardwoodDetail = () => {
  const { id } = useParams();
  const imgRef = useRef(null);
  const formRef = useRef(null);

  const hardwoodData = {
    SebastianIsle: {
      name: "Sebastian Isle",
      image:
        "https://c.pxhere.com/photos/1a/6f/antique_wood_floor_wood_floors_oak_texture_pattern_wooden-1050432.jpg!d",
      description:
        "An elegant oak hardwood floor with a beautiful slate pattern, perfect for adding sophistication to any room.",
    },
    WestportCape: {
      name: "Westport Cape",
      image:
        "https://c.pxhere.com/photos/65/83/trees_wood_yellow_wood_oak_sandalwood_teak_wood_grain-1161838.jpg!s",
      description:
        "Stylish square patterns in rich hardwood that seamlessly complement both classic and contemporary decor.",
    },
    CrosbyCove: {
      name: "Crosby Cove",
      image:
        "https://c.pxhere.com/photos/78/ba/boards_wall_boards_wood_wooden_wall_wall_wooden_boards_old_weathered-1215433.jpg!d",
      description:
        "Vibrant, reclaimed hardwood colors that bring warmth and character to your living spaces.",
    },
    GinghamOaks: {
      name: "Gingham Oaks",
      image: "https://live.staticflickr.com/7399/9199264443_e9f21517ec_b.jpg",
      description:
        "A cheerful hardwood floor with a lively pattern, ideal for creating a welcoming atmosphere in your home.",
    },
    Hilltop: {
      name: "Hilltop",
      image:
        "https://c.pxhere.com/photos/eb/78/trees_wood_yellow_wood_oak_sandalwood_teak_wood_grain-1161834.jpg!d",
      description:
        "A sleek, dark hardwood option that adds a modern touch to any room while offering durability.",
    },
    Regale: {
      name: "Regale",
      image:
        "https://c.pxhere.com/photos/40/d0/wood_wood_grain_texture_knot_timber_carpentry_wood_texture_smooth-819121.jpg!s",
      description:
        "Featuring textured lines, this hardwood enhances the depth and richness of your flooring.",
    },
    Symphony: {
      name: "Symphony",
      image:
        "https://get.pxhere.com/photo/board-wood-plank-floor-brown-lumber-wood-floor-background-hardwood-wooden-oak-backdrop-wood-background-flooring-plywood-wood-grain-wood-flooring-laminate-flooring-wood-stain-honey-oak-1228182.jpg",
      description:
        "Classic hardwood designs that create a timeless look, adding elegance to any home.",
    },
    BespokeCollection: {
      name: "Bespoke Collection",
      image:
        "https://c.pxhere.com/photos/7c/a0/chestnut_bark_tree_organic_agriculture_outdoors_environment_trunk-994106.jpg!d",
      description:
        "Unique, wood-inspired textures that provide warmth and a cozy feel to your interior spaces.",
    },
    Nouveau6: {
      name: "Nouveau 6",
      image:
        "https://c.pxhere.com/photos/18/20/shingle_wood_woods_wood_shingle_panel_facade_cladding_wall_alpine-943550.jpg!d",
      description:
        "Bright, floral-inspired hardwood patterns that bring life and vibrancy to any room.",
    },
    Nouveau7: {
      name: "Nouveau 7",
      image:
        "https://c.pxhere.com/photos/7d/6f/rust_rusted_texture_pattern_metal_steel_iron_rough-1279974.jpg!s",
      description:
        "Harmonious patterns in hardwood that beautifully complement modern interiors.",
    },
    Nouveau8: {
      name: "Nouveau 8",
      image:
        "https://c.pxhere.com/photos/d9/00/wood_wooden_wood_texture_wood_planks-1051345.jpg!d",
      description:
        "A rugged hardwood design that stands out, perfect for adding a unique touch to your decor.",
    },
    NanoPacific: {
      name: "Nano Pacific",
      image: "https://live.staticflickr.com/7303/13673414474_a0c583dbfb.jpg",
      description:
        "Distinctive hardwood borders that enhance the character and elegance of your flooring.",
    },
  };

  const hardwood = hardwoodData[id];

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
      {hardwood ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{hardwood.name}</h1>
          <div className="flex md:flex-row flex-col  gap-4 bg-slate-100 p-6">
            <div
              className="overflow-hidden relative max-w-xl "
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                ref={imgRef}
                src={hardwood.image}
                alt={hardwood.name}
                className="w-full h-auto transition-transform transform duration-300"
              />
            </div>
            <div className="mb-4">
              <p className="text-3xl mb-4 font-bold">{hardwood.description}</p>
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
        <h2 className="text-red-500">hardwood not found</h2>
      )}
      <div className="bg-slate-100 p-6 mt-6">
        <h3 className="text-2xl font-bold mb-4">Explore More Hardwoods</h3>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {Object.keys(hardwoodData).map((key) => (
            <div key={key}>
              <figure>
                <Link to={`/hardwood/${key}`}>
                  <img
                    src={hardwoodData[key].image}
                    alt={hardwoodData[key].name}
                    className="object-cover aspect-square rounded-lg"
                  />
                </Link>
                <figcaption className="text-center mt-2">
                  {hardwoodData[key].name}
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

export default HardwoodDetail;
