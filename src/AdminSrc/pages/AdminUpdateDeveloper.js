import React, { useState } from "react";

const AdminUpdateDeveloper = () => {
  // State to hold form data
  const [developerData, setDeveloperData] = useState({
    name: "",
    email: "",
    skills: "",
    availability: "",
  });

  // State for success/error message
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeveloperData({ ...developerData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating an API call
    setTimeout(() => {
      setMessage("Developer data updated successfully!");
    }, 1000);

    // You can replace this with an actual API call
    // Example: axios.put('/api/developers/update', developerData)
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-md p-6 w-[80rem] max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Developer Data</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4 flex gap-6">
            <label htmlFor="name" className=" text-gray-700 font-medium mb-2 flex justify-center items-center">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={developerData.name}
              onChange={handleInputChange}
              placeholder="Enter developer name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4 flex gap-6">
            <label htmlFor="email" className="flex justify-center items-center text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={developerData.email}
              onChange={handleInputChange}
              placeholder="Enter developer email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Skills Field */}
          <div className="mb-4 flex gap-6">
            <label htmlFor="skills" className="flex justify-center items-center text-gray-700 font-medium mb-2">
              Skills
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={developerData.skills}
              onChange={handleInputChange}
              placeholder="Enter developer skills (e.g., React, Node.js)"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Availability Field */}
          <div className="mb-4 flex gap-6">
            <label htmlFor="availability" className="flex justify-center items-center text-gray-700 font-medium mb-2">
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              value={developerData.availability}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select Availability</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Update Developer
          </button>
        </form>

        {/* Message Section */}
        {message && (
          <div className="mt-4 text-center text-green-500 font-medium">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUpdateDeveloper;
