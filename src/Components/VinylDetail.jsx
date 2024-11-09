import React from "react";
import { Link, useParams } from "react-router-dom";
import InfoForm from "./InfoForm"; // Assuming InfoForm is similar to the original one

const VinylDetail = () => {
  const { id } = useParams(); // Extract vinyl ID from the URL params

  // Data for vinyl products
  const vinylData = {
    EverettPark: {
      name: "Everett Park",
      image:
        "https://get.pxhere.com/photo/background-colors-design-exterior-granite-marble-pattern-rocks-solid-stone-surface-texture-textured-tiles-royalty-free-images-1551827.jpg",
      description: "A luxurious, high-end vinyl with a unique stone texture.",
    },
    Bedford: {
      name: "Bedford",
      image:
        "https://3.bp.blogspot.com/-MdJZ8hlDVhY/UXl97jMoxFI/AAAAAAAAHRg/xhZLL80ed1E/s1600/parquet-kambala-.png",
      description: "A classic parquet style vinyl with a warm tone.",
    },
    CovingtonFalls: {
      name: "Covington Falls",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/14/Wooden_floor.JPG",
      description: "A beautiful vinyl inspired by natural wooden flooring.",
    },
    FoundersTrace: {
      name: "Founders Trace",
      image:
        "https://c.pxhere.com/photos/56/e7/background_board_brown_floor_hardwood_planks_surface_texture-1549003.jpg!d",
      description: "A vintage style vinyl with a rich, earthy feel.",
    },
    WandersLoop: {
      name: "Wanders Loop",
      image:
        "https://img00.deviantart.net/aac4/i/2010/289/8/4/seamless_carpet_dark_by_hhh316-d30v2ul.jpg",
      description: "A modern vinyl with deep, intriguing patterns.",
    },
    Adventure: {
      name: "Adventure",
      image:
        "https://c1.staticflickr.com/3/2240/2048662430_fdc1d72d03_z.jpg?zz=1",
      description: "A vibrant and adventurous vinyl with bold colors.",
    },
    Aerial: {
      name: "Aerial",
      image:
        "https://get.pxhere.com/photo/tree-nature-wood-texture-plank-floor-trunk-old-wall-village-clear-gray-jars-figure-hardwood-boards-cracks-the-background-flooring-sawn-timber-the-structure-of-the-wood-flooring-laminate-flooring-wood-stain-jars-trunk-1205453.jpg",
      description: "A calming, wood-inspired vinyl with a natural look.",
    },
    Archipel: {
      name: "Archipel",
      image:
        "https://3.bp.blogspot.com/-MdJZ8hlDVhY/UXl97jMoxFI/AAAAAAAAHRg/xhZLL80ed1E/s1600/parquet-kambala-.png",
      description:
        "A vinyl with a distinctive, Mediterranean-inspired pattern.",
    },
    EvolutionPlank: {
      name: "Evolution Plank",
      image:
        "https://c.pxhere.com/photos/d6/97/tiles_tile_wood_table_texture_timber_floor_decor-1002125.jpg!d",
      description: "A timeless plank design with an evolution in style.",
    },
    DiscoveryRidge: {
      name: "Discovery Ridge",
      image:
        "https://get.pxhere.com/photo/house-wood-wall-wood-stain-hardwood-wood-flooring-lumber-plank-flooring-floor-plywood-garapa-laminate-flooring-1457089.jpg",
      description: "A rustic vinyl perfect for a cozy, homey feel.",
    },
    GlobeTrotter: {
      name: "Globe Trotter",
      image:
        "https://p0.pikist.com/photos/645/901/carpet-orient-pattern-oriental-carpet-retired-carpet-dealers-turkey-persian-rug-carpet-weaving-center.jpg",
      description: "A worldly vinyl design with exotic patterns.",
    },
    Nautika: {
      name: "Nautika",
      image:
        "https://c.pxhere.com/photos/d4/36/wood_desk_wallpaper_desktop_picture-1187816.jpg!d",
      description: "A nautical-themed vinyl with soothing blues and neutrals.",
    },
  };

  const vinyl = vinylData[id]; // Get vinyl data based on the ID from URL

  return (
    <div className="mx-auto p-6">
      {vinyl ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{vinyl.name}</h1>
          <div className="flex md:flex-row flex-col gap-4 bg-slate-100 p-6">
            <div className="overflow-hidden relative max-w-xl">
              <img
                src={vinyl.image}
                alt={vinyl.name}
                className="w-full h-auto transition-transform transform duration-300"
              />
            </div>
            <div className="mb-4">
              <p className="text-3xl mb-4 font-bold">{vinyl.description}</p>
              <h2 className="text-xl font-semibold">Call For Price</h2>
              <button className="mt-2 bg-black text-white py-2 px-4 rounded-xl hover:bg-green-700">
                Request more info
              </button>
            </div>
          </div>
        </>
      ) : (
        <h2 className="text-red-500">Vinyl not found</h2>
      )}
      <div className="bg-slate-100 p-6 mt-6">
        <h3 className="text-2xl font-bold mb-4">Explore More Vinyls</h3>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {Object.keys(vinylData).map((key) => (
            <div key={key}>
              <figure>
                <Link to={`/vinyl/${key}`}>
                  <img
                    src={vinylData[key].image}
                    alt={vinylData[key].name}
                    className="object-cover aspect-square rounded-lg"
                  />
                </Link>
                <figcaption className="text-center mt-2">
                  {vinylData[key].name}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-slate-100 p-6 mt-6">
        <h3 className="text-2xl font-bold mb-4">Request More Information</h3>
        <InfoForm />
      </div>
    </div>
  );
};

const Vinyl = () => {
  return (
    <div className="bg-slate-100">
      <div className="relative bg-black">
        <img
          className="w-screen h-60 object-cover opacity-80"
          src="https://live.staticflickr.com/5445/30519136084_580051599d_b.jpg"
          alt="vinyl"
        />

        <h1 className="absolute text-3xl text-slate-50 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold pb-4">
          VINYLS <br /> Wide Variety of Styles
        </h1>

        <h2 className="absolute rounded-full w-full max-w-md text-center cursor-pointer text-xl bg-black p-3 m-auto text-white bottom-4 left-1/2 -translate-x-1/2 font-bold">
          <Link to="#">Browse Vinyl</Link>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-5 gap-y-5 p-10 m-10 md:grid-cols-4">
        {Object.keys(vinylData).map((key) => (
          <div key={key}>
            <figure>
              <Link to={`/vinyl/${key}`}>
                <img
                  className="object-cover aspect-square"
                  src={vinylData[key].image}
                  alt={vinylData[key].name}
                />
              </Link>
              <figcaption>{vinylData[key].name}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VinylDetail;
