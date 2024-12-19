import React, { useState, useRef, useEffect } from 'react';
import { FaBell } from 'react-icons/fa'; // React Icon for notification bell

const Notification = () => {
  const [notifications, setNotifications] = useState(3); // Default notifications count is 3 for demonstration
  const [isOpen, setIsOpen] = useState(false);

  // Ref for the dropdown menu to detect clicks outside
  const dropdownRef = useRef(null);

  // Sample notification data
  const notificationData = [
    { id: 1, message: 'New project assigned to you.' },
    { id: 2, message: 'Your payment was processed successfully.' },
    { id: 3, message: 'You have a new message from Admin.' },
  ];

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close the dropdown
    }
  };

  // Attach event listener on mount and clean it up on unmount
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between p-4 mr-2 lg:mr-0">
      {/* Notification Icon */}
      <div className="relative">
        <button
          className="text-white flex justify-center items-center"
          onClick={toggleDropdown}
        >
          <FaBell size={24} />
          {/* Notification Badge */}
          {notifications > 0 && (
            <span className="absolute bottom-3 left-3 bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {notifications}
            </span>
          )}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-3 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          >
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-700 mb-4">Notifications</h3>
              <div className="space-y-2">
                {notificationData.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                  >
                    <p className="text-sm text-gray-700">{notification.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Notification;
