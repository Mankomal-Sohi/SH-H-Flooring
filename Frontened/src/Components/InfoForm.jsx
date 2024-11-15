import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function InfoForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // Initialize navigate

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://sh-h-flooring-backened.vercel.app/info-form",
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
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12 m-10 ">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="pt-4 text-center font-bold leading-7 text-gray-900 text-2xl">
            Request More Info
          </h2>

          <div className="mt-10 mx-auto grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-6 max-w-xl ">
            <div className="sm:col-span-3 ">
              <div className="mt-2 border border-gray-900 ">
                <input
                  placeholder="*First Name"
                  id="FirstName"
                  name="FirstName"
                  type="text"
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: " This field is required",
                    },
                  })}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  placeholder="*Last Name"
                  id="LastName"
                  name="LastName"
                  type="text"
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: " This field is required",
                    },
                  })}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.lastName && (
                  <div className="text-red-600"> {errors.lastName.message}</div>
                )}
              </div>
            </div>

            <div className="sm:col-span-4">
              <div className="mt-2 border border-gray-900 ">
                <input
                  placeholder="*Email Address"
                  id="Email"
                  name="Email"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.emailAddress && (
                  <div className="text-red-600">
                    {" "}
                    {errors.emailAddress.message}
                  </div>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="mt-2 border border-gray-900 ">
                <input
                  {...register("PhoneNumber")}
                  placeholder="Phone"
                  id="PhoneNumber"
                  name="PhoneNumber"
                  type="text"
                  autoComplete="phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="mt-2 border border-gray-900 ">
                <input
                  placeholder="*Postal Code"
                  id="PostalCode"
                  name="PostalCode"
                  type="text"
                  {...register("postalCode", {
                    required: {
                      value: true,
                      message: " This field is required",
                    },
                  })}
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.postalCode && (
                  <div className="text-red-600">
                    {" "}
                    {errors.postalCode.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full">
          <div className="mt-2 border mx-auto border-gray-900  max-w-2xl ">
            <textarea
              {...register("Comments")}
              placeholder="Comments"
              id="Comments"
              name="Comments"
              rows={3}
              className=" placeholder:text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
          <div className="relative flex gap-x-3 max-w-2xl mx-auto">
            <div className="flex h-6 items-center ">
              <input
                id=" up-to-date"
                name="up-to-date"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label htmlFor="candidates" className="font-medium text-gray-900">
                Keep me up to date with exclusive offers.
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center pb-4 ">
        <button
          type="submit"
          className=" bg-black rounded-xl px-3 py-2 w-60 font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        >
          Send
        </button>
      </div>
    </form>
  );
}
