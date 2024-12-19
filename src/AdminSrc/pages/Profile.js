import React, { useState, useRef, useEffect } from "react";
import Profileimg from '../images/Profileimg.jpg';
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if click is outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        className="flex items-center lg:px-4 sm:px-0 bg-black text-white rounded-lg focus:outline-none"
        onClick={toggleDropdown}
      >
        <img
          src={Profileimg}
          alt="Profile"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-full mr-2 object-cover"
        />
        <span className="hidden lg:inline">Abhishek</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg text-black"
          style={{ zIndex: 50 }} // Ensure it appears on top
        >
          {/* Profile Section */}
          <div className="flex items-center px-4 py-3 border-b">
            <div>
              <p className="font-bold">Abhishek Bajpai</p>
              <button className="text-blue-600 text-sm hover:underline">
                <Link to="/EditProfile">Edit Profile</Link>
              </button>
            </div>
          </div>

          {/* Navigation Section */}
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to="/AdminProfile">My Profile</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to="/AdminBalance">My Balance</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to="https://mail.google.com/mail/u/0/#inbox">Inbox</Link>
            </li>
          </ul>

          {/* Account Settings */}
          <div className="px-4 py-2 border-t">
            <button className="w-full text-left hover:bg-gray-100 px-2 py-2">
              Account Settings
            </button>
          </div>

          {/* Logout Section */}
          <div className="px-4 py-2 border-t">
            <button className="w-full text-left text-red-600 hover:bg-gray-100 px-2 py-2">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
