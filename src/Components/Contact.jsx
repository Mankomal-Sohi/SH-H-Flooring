import React from "react";
import { useForm } from "react-hook-form";
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <section className="py-6 m-auto lg:py-3 ">
        <div className="max-w-6xl mx-auto p-4 md:p-16 xl:p-20">
          <div className="lg:w-2/3 space-y-5 text-center mx-auto">
            <h1 className="uppercase text-slate-700 text-3xl font-medium m-auto">
              Contact Us
            </h1>
            <div className="h-0.5 bg-red-500 w-14 mx-auto"></div>
            <p className="text-gray-400 text-base leading-6">
              Get in touch to get the latest designs
            </p>
          </div>
          <div className="space-y-5 py-5 w-full md:w-1/2 m-auto">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label for="Firstname" className="sr-only">
                  FirstName
                </label>
                <input
                  type="text"
                  name="FirstName"
                  id="FirstName"
                  placeholder="Enter First Name"
                  className="border border-gray-300 text-gray-600 text-sm rounded block focus:ring-0 focus:border-gray-500 w-full p-3"
                ></input>
                <label for="Lastname" className="sr-only">
                  LastName
                </label>
                <input
                  type="text"
                  name="LastName"
                  id="LastName"
                  placeholder="Enter Last Name"
                  className="border border-gray-300 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 w-full p-3"
                ></input>
              </div>
              <label for="Email" className="sr-only">
                Email
              </label>
              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Enter Email Address"
                className="border border-gray-300 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 w-full p-3 my-3"
              ></input>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label for="PhoneNumber" className="sr-only">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="PhoneNumber"
                  id="PhoneNumber"
                  placeholder="Enter Phone Number"
                  className="border border-gray-300 text-gray-600 text-sm rounded block focus:ring-0 focus:border-gray-500 w-full p-3"
                ></input>
                <label for="PostalCode" className="sr-only">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="PostalCode"
                  id="PostalCode"
                  placeholder="Enter Postal Code"
                  className="border border-gray-300 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 w-full p-3"
                ></input>
              </div>
              <label for="Comments" className="sr-only">
                Comments
              </label>
              <textarea
                type="text"
                name="Comments"
                id="Comments"
                placeholder="Comments"
                className="border border-gray-300 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 w-full p-5 my-5"
              ></textarea>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="Offer"
                  id="Offer"
                  className="mr-3"
                ></input>
                <label for="Offer" className="text-gray-600 text-sm my-">
                  Keep me upto date with latest offers
                </label>
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  name="send"
                  id="submit"
                  value="Send"
                  className=" bg-green-500 text-white p-4 w-auto lg:w-1/2 mt-3 inline-block"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
