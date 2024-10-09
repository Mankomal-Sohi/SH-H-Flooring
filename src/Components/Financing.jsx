import React from "react";

const Financing = () => {
  return (
    <div className="m-auto px-16">
      <h1 className="text-l md:text-2xl lg:text-3xl font-bold text-center text-slate-700">
        Financing
      </h1>
      <h2 className="text-sm md:text-l lg:text-xl text-center py-5 text-slate-700">
        Explore our financial options !!
      </h2>
      <img
        src="https://p0.pikist.com/photos/272/394/money-card-business-credit-card-pay-shopping.jpg"
        className="w-screen h-80"
      />
      <p className="text-xs md:text-sm font-thin py-6">
        Explore our financial options.We understand that home improvement
        projects are an investment, and we're here to make it easier to fit your
        budget. Our flexible financing plans are designed to help you achieve
        the home of your dreams without the financial stress. We offer various
        financing options, including zero-interest plans and low monthly payment
        options, so you can choose what works best for you.
      </p>
    </div>
  );
};

export default Financing;
