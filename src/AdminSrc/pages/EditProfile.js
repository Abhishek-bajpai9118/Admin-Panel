import React, { useState } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "Abhishek",
    lastName: "Bajpai",
    role: "Admin",
    email: "abhishek@example.com",
    phoneNumber: "123-456-7890",
    address: "123 Admin Street, City, Country, 123456",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle profile update logic here
    console.log("Profile updated", formData);
  };

  return (
    <div className="min-h-screen w-full p-8 ">
      <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-semibold">Admin Information</h3>
            <p className="text-gray-600">Manage your profile details below.</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Edit
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-2 p-2 border rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-2 p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="role" className="font-medium text-gray-700">
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-2 p-2 border rounded-md"
              readOnly
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 p-2 border rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phoneNumber" className="font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-2 p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="address" className="font-medium text-gray-700">
              Full Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-2 p-2 border rounded-md"
              rows="3"
            />
          </div>

          <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
