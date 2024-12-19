import React from "react";

const DeveloperRegistrationForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center -mb-[300px] text-black">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8 -mt-20 ">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Developer Registration Form
        </h1>
        <form>
          {/* Full Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div>
              <label htmlFor="firstName" className="block font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block font-semibold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Email & Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Specification */}
          <div className="mb-4">
            <label htmlFor="specification" className="block font-semibold text-gray-700">
              Specification
            </label>
            <input
              type="text"
              id="specification"
              placeholder="Enter your specialization (e.g., Frontend Developer)"
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* GitHub & Portfolio URLs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="github" className="block font-semibold text-gray-700">
                GitHub URL
              </label>
              <input
                type="url"
                id="github"
                placeholder="GitHub Profile URL"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="portfolio" className="block font-semibold text-gray-700">
                Portfolio URL
              </label>
              <input
                type="url"
                id="portfolio"
                placeholder="Portfolio Website URL"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Password & Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="password" className="block font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block font-semibold text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeveloperRegistrationForm;
