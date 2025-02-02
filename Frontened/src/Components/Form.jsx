import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Form() {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate(); // Initialize navigate

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://sh-h-flooring-backened.vercel.app/estimate-form",
        {
          method: "POST",
          body: JSON.stringify(data), // Directly pass the data without wrapping in { data }
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12 m-10 ">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-center font-semibold leading-7 text-gray-900 text-xl md:text-2xl lg:text-4xl">
              Request A Free Estimate
            </h2>
            <p className=" text-center mt-4 text-sm font-serif font-3xl leading-6 text-gray-600">
              MEET WITH ONE OF OUR SKILLED SPECIALISTS TO GET STARTED
            </p>

            <div className="mt-10 mx-auto grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-6 max-w-xl ">
              <div className="sm:col-span-3 ">
                <div className="mt-2 border border-gray-900 ">
                  <input
                    placeholder="* First Name"
                    id="firstName"
                    name="firstName"
                    type="text"
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: " This field is required",
                      },
                    })}
                    autoComplete="given-name"
                    className="block  p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.firstName && (
                    <div className="text-red-600">
                      {" "}
                      {errors.firstName.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="mt-2 border border-gray-900 ">
                  <input
                    placeholder="* Last Name"
                    id="lastName"
                    name="lastName"
                    type="text"
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: " This field is required",
                      },
                    })}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                  {errors.lastName && (
                    <div className="text-red-600">
                      {" "}
                      {errors.lastName.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-4">
                <div className="mt-2 border border-gray-900 ">
                  <input
                    placeholder="* Email Address"
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    {...register("emailAddress", {
                      required: "This field is required",
                      validate: {
                        validEmail: (value) =>
                          (value.includes("@") && value.includes(".com")) ||
                          "Enter a valid email address",
                      },
                    })}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                  {errors.emailAddress && (
                    <div className="text-red-600">
                      {" "}
                      {errors.emailAddress.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="mt-2 border border-gray-900 ">
                  <select
                    {...register("country")}
                    placeholder="Country"
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2 border border-gray-900 ">
                  <input
                    {...register("streetaddress")}
                    placeholder="Street Address"
                    id="streetaddress"
                    name="streetaddress"
                    type="text"
                    autoComplete="streetaddress"
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <div className="mt-2 border border-gray-900 ">
                  <input
                    placeholder="City"
                    id="city"
                    name="city"
                    type="text"
                    {...register("city")}
                    autoComplete="address-level2"
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.city && (
                    <div className="text-red-600"> {errors.city.message}</div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="mt-2 border border-gray-900 ">
                  <input
                    {...register("state")}
                    placeholder="State/Province"
                    id="state"
                    name="state"
                    type="text"
                    autoComplete="address-level1"
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="mt-2 border border-gray-900 ">
                  <input
                    placeholder="* Postal Code"
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    {...register("postalCode", {
                      required: {
                        value: true,
                        message: " This field is required",
                      },
                    })}
                    autoComplete="postal-code"
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.postalCode && (
                    <div className="text-red-600">
                      {" "}
                      {errors.postalCode.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="preffered_date"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Preffered Date
                </label>
                <div className="mt-2 border border-gray-900 ">
                  <input
                    {...register("prefferedDate")}
                    placeholder="Preffered Date"
                    id="prefferedDate"
                    name="prefferedDate"
                    type="date"
                    autoComplete="preffered-date"
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  ></input>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="time"
                  className="block p-2 text-sm font-medium leading-6 text-gray-900"
                >
                  Preffered Time
                </label>
                <div className="mt-2 border border-gray-900 ">
                  <select
                    {...register("prefferedTime")}
                    placeholder="Preffered Time"
                    id="prefferedTime"
                    name="prefferedTime"
                    autoComplete="preffered-time"
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12 ">
            <div className="mt-10 space-y-10 max-w-xl mx-auto">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  What products are you interested in?
                </legend>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {["Carpet", "Carpet Tile", "Hardwood", "Laminate"].map(
                    (product, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          {...register("productsInterested")}
                          type="checkbox"
                          value={product}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor={`product-${index}`}
                          className="ml-2 text-sm leading-6 font-medium text-gray-900"
                        >
                          {product}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </fieldset>
            </div>
          </div>
          <div className="col-span-full">
            <div className="mt-2 border mx-auto border-gray-900  max-w-2xl ">
              <textarea
                {...register("comments")}
                placeholder="Comments"
                id="comments"
                name="comments"
                rows={3}
                className=" placeholder:text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <div className="relative flex gap-x-3 max-w-2xl mx-auto">
              <div className="flex h-6 items-center ">
                <input
                  {...register("keepUpdated")}
                  id=" keepUpdated"
                  name="keepUpdated"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label
                  htmlFor="candidates"
                  className="font-medium text-gray-900"
                >
                  Keep me up to date with exclusive offers.
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center mb-6 ">
          <button
            type="submit"
            className=" bg-green-600 px-3 py-2 w-60 font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
}
