import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import InfoForm from "./InfoForm";

const LaminateDetail = () => {
  const formRef = useRef(null);
  const imgRef = useRef(null);
  const { id } = useParams();

  const laminateData = {
    HamptonVilla: {
      name: "Hampton Villa",
      image:
        "https://1.bp.blogspot.com/-jvxtDvxXVGg/YJAOv9S9VeI/AAAAAAAEgQ0/pciQimbqaK8smVodccfy-XtE1PswoNIGwCLcBGAsYHQ/s627/matt1.PNG",
      description: "A timeless classic design with a sophisticated appeal.",
    },
    LenoxPark: {
      name: "Lenox Park",
      image: "https://live.staticflickr.com/2174/2212642020_010754be3c.jpg",
      description: "Refined elegance with modern tones.",
    },
    AdlerCreek: {
      name: "Adler Creek",
      image:
        "https://c.pxhere.com/photos/6f/b9/wood_texture_background_hardware_store_grain_structure_wood_texture_pattern-619986.jpg!d",
      description: "A natural, earthy design that brings the outdoors in.",
    },
    AntiqueCraft: {
      name: "Antique Craft",
      image: "https://live.staticflickr.com/3177/2766291800_0cb79cab9f.jpg",
      description: "An antique-inspired look with a rustic touch.",
    },
    Bellente: {
      name: "Bellente",
      image: "https://freebie.photography/background/laminate_floor.jpg",
      description: "Chic and simple, perfect for modern spaces.",
    },
    CastleBriar: {
      name: "Castle Briar",
      image:
        "https://1.bp.blogspot.com/-jvxtDvxXVGg/YJAOv9S9VeI/AAAAAAAEgQ0/pciQimbqaK8smVodccfy-XtE1PswoNIGwCLcBGAsYHQ/s627/matt1.PNG",
      description: "A rustic design with warm, rich tones.",
    },
    Cypresta: {
      name: "Cypresta",
      image:
        "https://get.pxhere.com/photo/wood-plank-floor-roof-beam-ceiling-lumber-hardwood-flooring-plywood-wood-flooring-outdoor-structure-laminate-flooring-wood-stain-4606.jpg",
      description:
        "A wood-inspired laminate with a clean and natural aesthetic.",
    },
    Elderwood: {
      name: "Elderwood",
      image:
        "https://c.pxhere.com/photos/31/b5/wood_texture_grain_brown_pattern_wood_texture_textures_old-721806.jpg!d",
      description: "A vintage, rustic laminate with a unique grain pattern.",
    },
    Hartwick: {
      name: "Hartwick",
      image:
        "https://c.pxhere.com/photos/65/9b/background_blank_space_copy_space_design_space_isolated_mock_up_mockup_space-1607977.jpg!d",
      description: "A sleek, modern laminate with clean lines and simplicity.",
    },
    Sterlington: {
      name: "Sterlington",
      image:
        "https://get.pxhere.com/photo/sand-wood-texture-floor-wall-pattern-brown-tile-grunge-material-surface-cracked-textured-textile-beige-wallpaper-flooring-plywood-wood-flooring-laminate-flooring-764948.jpg",
      description:
        "A soft, sand-toned laminate perfect for a light and airy atmosphere.",
    },
    WesternRow: {
      name: "Western Row",
      image:
        "https://get.pxhere.com/photo/house-wood-wall-wood-stain-hardwood-wood-flooring-lumber-plank-flooring-floor-plywood-garapa-laminate-flooring-1457089.jpg",
      description: "A warm, earthy laminate with rustic charm.",
    },
    MiramarShores: {
      name: "Miramar Shores",
      image:
        "https://c.pxhere.com/photos/28/84/wood_texture_wooden_texture-661691.jpg!d",
      description: "A light, beach-inspired laminate with a coastal feel.",
    },
  };

  const laminate = laminateData[id];

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
      {laminate ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{laminate.name}</h1>
          <div className="flex md:flex-row flex-col  gap-4 bg-slate-100 p-6">
            <div
              className="overflow-hidden relative max-w-xl "
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                ref={imgRef}
                src={laminate.image}
                alt={laminate.name}
                className="w-full h-auto transition-transform transform duration-300"
              />
            </div>
            <div className="mb-4">
              <p className="text-3xl mb-4 font-bold">{laminate.description}</p>
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
        <h2 className="text-red-500">laminate not found</h2>
      )}
      <div className="bg-slate-100 p-6 mt-6">
        <h3 className="text-2xl font-bold mb-4">Explore More Laminates</h3>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {Object.keys(laminateData).map((key) => (
            <div key={key}>
              <figure>
                <Link to={`/laminate/${key}`}>
                  <img
                    src={laminateData[key].image}
                    alt={laminateData[key].name}
                    className="object-cover aspect-square rounded-lg"
                  />
                </Link>
                <figcaption className="text-center mt-2">
                  {laminateData[key].name}
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

export default LaminateDetail;
