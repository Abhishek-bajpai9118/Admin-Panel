import React, { useState } from "react";

const ClientRegistration = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phone: "",
    address: "",
    companyName: "",
    website: "",
    industry: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.clientName) formErrors.clientName = "Client name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.address) formErrors.address = "Address is required";
    if (!formData.companyName) formErrors.companyName = "Company name is required";
    if (!formData.website) formErrors.website = "Website is required";
    if (!formData.industry) formErrors.industry = "Industry is required";
    if (!formData.username) formErrors.username = "Username is required";
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage("Client registration successful!");
      setFormData({
        clientName: "",
        email: "",
        phone: "",
        address: "",
        companyName: "",
        website: "",
        industry: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Client Registration
        </h2>
        {successMessage && (
          <p className="text-green-600 text-center mb-4">{successMessage}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Client Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Client Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="clientName"
                  className="text-gray-700 font-medium"
                >
                  Client Name:
                </label>
                <input
                  type="text"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  id="clientName"
                  placeholder="Enter client name"
                  className="w-full border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.clientName && (
                  <p className="text-red-500 text-sm">{errors.clientName}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="text-gray-700 font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  placeholder="Enter email address"
                  className="w-full border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="phone" className="text-gray-700 font-medium">
                Phone:
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                id="phone"
                placeholder="Enter phone number"
                className="w-full border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Company Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Company Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="companyName"
                  className="text-gray-700 font-medium"
                >
                  Company Name:
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  id="companyName"
                  placeholder="Enter company name"
                  className="w-full border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">{errors.companyName}</p>
                )}
              </div>
              <div>
                <label htmlFor="website" className="text-gray-700 font-medium">
                  Website:
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  id="website"
                  placeholder="Enter website link"
                  className="w-full border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.website && (
                  <p className="text-red-500 text-sm">{errors.website}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="industry" className="text-gray-700 font-medium">
                Industry:
              </label>
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                id="industry"
                placeholder="Enter industry type"
                className="w-full border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.industry && (
                <p className="text-red-500 text-sm">{errors.industry}</p>
              )}
            </div>
          </div>

          {/* Account Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Account Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="username" className="text-gray-700 font-medium">
                  Username:
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  id="username"
                  placeholder="Enter username"
                  className="w-full border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">{errors.username}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-gray-700 font-medium"
                >
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  placeholder="Enter password"
                  className="w-full border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                />
                              {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="confirmPassword"
                className="text-gray-700 font-medium"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                id="confirmPassword"
                placeholder="Confirm password"
                className="w-full border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientRegistration;

