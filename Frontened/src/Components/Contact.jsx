import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const Contact = () => {
  const navigate = useNavigate(); // Initialize navigate
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://sh-h-flooring.vercel.app/contact", {
        method: "POST",
        body: JSON.stringify(data), // Directly pass the data without wrapping in { data }
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      if (response.ok) {
        console.log(res);

        navigate("/ThankYou"); // Redirect after successful submission
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {isSubmitting && <div>Loading....</div>}
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  {...register("FirstName", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Only Alphabets are allowed",
                    },
                  })}
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  placeholder="Enter First Name"
                  className="border border-gray-300 text-gray-600 text-sm rounded block focus:ring-0 focus:border-gray-500 w-full p-3"
                />
                {errors.FirstName && (
                  <div className="text-red-500">{errors.FirstName.message}</div>
                )}
                <input
                  {...register("LastName", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Only Alphabets are allowed",
                    },
                  })}
                  type="text"
                  id="LastName"
                  name="LastName"
                  placeholder="Enter Last Name"
                  className="border border-gray-300 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 w-full p-3"
                />
                {errors.LastName && (
                  <div className="text-red-500">{errors.LastName.message}</div>
                )}
              </div>
              <input
                {...register("email", {
                  required: "This field is required",
                })}
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email Address"
                className="border border-gray-300 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 w-full p-3 my-3"
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  {...register("PhoneNumber")}
                  type="text"
                  id="PhoneNumber"
                  name="PhoneNumber"
                  placeholder="Enter Phone Number"
                  className="border border-gray-300 text-gray-600 text-sm rounded block focus:ring-0 focus:border-gray-500 w-full p-3"
                />
                <input
                  {...register("PostalCode", {
                    required: "This field is required",
                  })}
                  type="text"
                  id="PostalCode"
                  name="PostalCode"
                  placeholder="Enter Postal Code"
                  className="border border-gray-300 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 w-full p-3"
                />
                {errors.PostalCode && (
                  <div className="text-red-500">
                    {errors.PostalCode.message}
                  </div>
                )}
              </div>
              <textarea
                {...register("Comments")}
                id="Comments"
                name="Comments"
                placeholder="Comments"
                className="border border-gray-300 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 w-full p-5 my-5"
              ></textarea>
              <div className="flex items-center">
                <input
                  {...register("offer")}
                  type="checkbox"
                  id="Offer"
                  className="mr-3"
                />
                <label htmlFor="Offer" className="text-gray-600 text-sm">
                  Keep me up to date with latest offers
                </label>
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  disabled={isSubmitting}
                  value="Send"
                  className=" bg-green-500 text-white p-4 w-auto lg:w-1/2 mt-3 inline-block"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
