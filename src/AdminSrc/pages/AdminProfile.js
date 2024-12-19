import React from 'react';
import { CiEdit } from "react-icons/ci";

import ProfileImg from '../images/Profileimg.jpg'; // Replace with the actual profile image path

const AdminProfile = () => {
  const user = {
    image: ProfileImg,
    name: 'Abhishek Bajpai',
    role: 'Admin',
    address: '123 Admin Street, City, Country',
    firstName: 'Abhishek',
    lastName: 'Bajpai',
    email: 'abhishek@example.com',
    phone: '123-456-7890',
    fullAddress: '123 Admin Street, City, Country, 123456'
  };

  return (
    <div className="container mx-auto p-8 text-black">
      {/* First Section: User Image, Name, Role, Address */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center mb-6 lg:mb-0">
          <img
            src={user.image}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-lg text-gray-600">{user.role}</p>
            <p className="text-sm text-gray-500 mt-1">{user.address}</p>
          </div>
        </div>
      </div>

      {/* Second Section: User Info (First Name, Last Name, Role, Email, Phone) */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Admin Information</h3>
          <button className=" flex gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
            <div>Edit</div> <CiEdit className='flex justify-center items-center mt-1'/>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name, Last Name, Role */}
          <div>
            <label className="block text-sm font-medium text-gray-600">First Name</label>
            <p className="text-gray-800">{user.firstName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Last Name</label>
            <p className="text-gray-800">{user.lastName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Role</label>
            <p className="text-gray-800">{user.role}</p>
          </div>

          {/* Email and Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <p className="text-gray-800">{user.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Phone Number</label>
            <p className="text-gray-800">{user.phone}</p>
          </div>
        </div>
      </div>

      {/* Third Section: Full Address */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Full Address</h3>
        <p className="text-gray-800">{user.fullAddress}</p>
      </div>
    </div>
  );
};

export default AdminProfile;
