import { Link } from "react-router-dom";
import Form from "./Form";
import { BsChatText } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-screen h-96 object-cover"
          src="https://2.bp.blogspot.com/-J68x1jWW1B4/UZGdiQSe7wI/AAAAAAAAHrw/mK93KPYWTtg/s1600/IL+MIO+ALBERO+COVER.jpg"
        />
        <h1 className="absolute text-md md:text-2xl lg:text-3xl text-slate-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-thin">
          Here At SH&H Flooring we Are Offering Best Services At Best Prices!
          Contact Us Now!
        </h1>
        <h2 className="absolute text-l md:text-2xl lg:text-3xl italic font-thin text-amber-400 bottom-4 left-1/2 -translate-x-1/2">
          Where Every steps begins with excellence!
        </h2>
      </div>
      <div className="text-center p-4 my-3">
        <h1 className=" text-5xl my-3">
          Looking For New Floors In The Ottawa, ON Area?{" "}
        </h1>
        <h2 className="font-thin text-xl">
          SHOP AT OUR EXTENSIVE FLOORING CATALOGUE
        </h2>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 my-3 mx-14">
        <div className="relative flex items-center justify-center">
          <figure className="relative">
            <img
              className="object-cover aspect-square h-80 w-72"
              src="https://www.chestnutflooring.ca/wp-content/uploads/2021/05/Ambiances-Engineered-Hardwood-Flooring-Collection-1024x663.jpg"
              alt="Hardwood"
            />
            <figcaption className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <Link
                to="/Hardwood"
                className="bg-white border-solid p-3 font-semibold hover:text-green-500 w-48 block "
              >
                HARDWOOD
              </Link>
            </figcaption>
          </figure>
        </div>
        <div className="relative flex items-center justify-center">
          <figure className="relative">
            <img
              className="object-cover aspect-square h-80 w-72"
              src="https://citytile.ca/wp-content/uploads/2018/09/Armstrong_LVT_2013_1334_JatobaMahoganyWEB.jpg"
              alt="Luxury Vinyl"
            />
            <figcaption className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <Link
                to="/Vinyl"
                className="bg-white  border-solid p-3 font-semibold hover:text-green-500 w-48 block"
              >
                LUXURY_VINYL
              </Link>
            </figcaption>
          </figure>
        </div>
        <div className="relative flex items-center justify-center">
          <figure className="relative">
            <img
              className="object-cover aspect-square h-80 w-72"
              src="https://i.pinimg.com/originals/88/f4/ce/88f4cef40f0495b40b0d796ccbd21d2d.jpg"
              alt="Carpet"
            />
            <figcaption className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <Link
                to="/Carpet"
                className="bg-white  border-solid p-3 font-semibold hover:text-green-500 w-48 block"
              >
                CARPET
              </Link>
            </figcaption>
          </figure>
        </div>
        <div className="relative flex items-center justify-center">
          <figure className="relative">
            <img
              className="object-cover aspect-square h-80 w-72"
              src="https://i.pinimg.com/originals/e1/c6/01/e1c601bb3a833ddf4a7801b23067295d.jpg"
              alt="Paint"
            />
            <figcaption className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <Link
                to="/Paint"
                className="bg-white  border-solid p-3 font-semibold hover:text-green-500 w-48 block"
              >
                PAINT
              </Link>
            </figcaption>
          </figure>
        </div>
        <div className="relative flex items-center justify-center">
          <figure className="relative">
            <img
              className="object-cover aspect-square h-80 w-72"
              src="https://homespure.com/wp-content/uploads/2020/09/traditional-white-laminate-flooring.jpg"
              alt="Laminate"
            />
            <figcaption className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <Link
                to="/Laminate"
                className="bg-white  border-solid p-3 font-semibold hover:text-green-500 w-48 block"
              >
                LAMINATE
              </Link>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="text-center m-3">
        <Link
          to="#"
          className=" font-medium text-green-600 hover:text-green-900 text-center "
        >
          {" "}
          View All Products{" "}
        </Link>
      </div>
      <div className="p-4 my-12 shopAtCards grid grid-cols-1 md:grid-cols-2 gap-3 mx-4 md:mx-14">
        {/* Shop In-Store Card */}
        <div className="relative">
          <figure className="bg-black">
            <img
              className="object-cover aspect-square md:h-80 h-64 w-full opacity-60"
              src="https://cdn.websites.hibu.com/816e7b37971440cc95b8dd53ed7c9da9/dms3rep/multi/IMG_0060.JPG"
              alt="shop_in_store"
            />
            <figcaption className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between h-full">
              <h1 className="text-xl md:text-2xl mt-1 font-semibold text-white text-center">
                SHOP IN-STORE
              </h1>
              <h2 className="text-white mt-2 md:mt-4 text-left mx-1 text-sm md:text-lg">
                Come by our showroom and see what we have to offer. Our
                knowledgeable staff is ready to assist you in selecting the
                right flooring to ensure your satisfaction for years to come.
              </h2>
              <div className="text-center mt-8 md:mt-12">
                <h2 className="w-48 md:w-56 text-lg md:text-xl text-white bg-green-600 p-2 hover:bg-green-900 inline-block">
                  <Link to="/contact">Contact Us</Link>
                </h2>
              </div>
            </figcaption>
          </figure>
        </div>

        {/* Shop At Home Card */}
        <div className="relative">
          <figure className="bg-black">
            <img
              className="object-cover aspect-square md:h-80 h-64 w-full opacity-60"
              src="https://assets.site-static.com/blogphotos/1715/2715-home-flooring-guide.jpg"
              alt="shop_at_home"
            />
            <figcaption className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between h-full">
              <h1 className="text-xl md:text-2xl font-semibold text-white text-center">
                SHOP AT HOME
              </h1>
              <h2 className="text-white mt-2 md:mt-4 text-left mx-1 text-sm md:text-lg">
                Don’t have time to stop by our showroom? We can bring samples
                right to your front door. Just schedule an appointment to get
                started.
              </h2>
              <div className="text-center mt-8 md:mt-12">
                <h2 className="w-48 md:w-56 text-lg md:text-xl text-white bg-green-600 p-2 hover:bg-green-900 inline-block">
                  <Link to="/ShopAtHome">Get Started</Link>
                </h2>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="request-form bg-slate-200 p-2">
        <Form />
      </div>
      {/* Fixed "Text Us" Button */}
      <Link
        to="/contact" // Adjust the route as necessary
        className="fixed h-12  bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 flex items-center"
      >
        <BsChatText className="mr-2" />
        Text Us
      </Link>
    </div>
  );
};

export default Home;
