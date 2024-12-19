import React, { useState } from 'react';
import Profile from '../pages/Profile'; // Assuming Profile component is available
import Sidebar from '../pages/Sidebar'; // Assuming Sidebar component is available
import MessagesDropdown from '../pages/Messages';
import QuickAccess from '../pages/Quickaccess';
import Notification from '../pages/Notification';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="bg-black text-white py-4 px-0 sm:px-16 flex items-center justify-between ">
      {/* Left: Hamburger Icon */}
      <div className="relative">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Sidebar (Toggle Visibility) */}
        {isSidebarOpen && (
          <div
            className="absolute top-full left-0 bg-gray-800 text-white shadow-lg rounded-md w-48 z-50"
            onMouseLeave={() => setIsSidebarOpen(false)}
          >
            <Sidebar />
          </div>
        )}
      </div>

      {/* Middle: Search Bar */}
      <div className="flex-grow px-4 sm:px-8">
  <form className="relative group">
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder="Search..."
      className="w-24 sm:w-24 md:w-40 lg:w-full  transition-all duration-300 p-2 pl-10 bg-white text-black rounded-lg focus:ring focus:ring-blue-300"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  </form>
</div>


    <div className='flex  -ml-6  bg-black' >
        {/* messages Section */}
        <div >
        <MessagesDropdown/>
      </div>

      {/* Quick Access section */}
      <div>
        <QuickAccess/>
      </div>

      {/* Notification section  */}
      <div>
        <Notification/>
      </div>

      {/* Right: Profile Section */}
      <div className="flex items-center gap-4">
        <Profile />
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
