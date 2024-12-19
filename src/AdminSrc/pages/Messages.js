import React, { useState, useRef, useEffect } from "react";
import { LuMessageSquareMore } from "react-icons/lu";
import { Link } from "react-router-dom";

const MessagesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Ref for the dropdown menu to detect clicks outside
  const dropdownRef = useRef(null);

  // Sample messages data
  const messages = [
    { id: 1, user: "John Doe", text: "Please check the report.", read: false },
    { id: 2, user: "Jane Smith", text: "Meeting scheduled for tomorrow.", read: true },
    { id: 3, user: "Mark Lee", text: "Can you review my code?", read: false },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const markAsRead = (id) => {
    console.log(`Message with ID ${id} marked as read.`);
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
    <div className="relative">
      {/* Messages Icon */}
      <button
        className="flex items-center px-4 py-2 text-white rounded-lg focus:outline-none"
        onClick={toggleDropdown}
      >
        <span className="material-icons">
          <LuMessageSquareMore className="flex justify-center items-center w-8 h-8 font-bold" />
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute -left-24 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg"
        >
          <div className="max-h-64 overflow-y-auto">
            {/* Message List */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-center justify-between px-4 py-3 border-b ${
                  message.read ? "bg-gray-100" : ""
                }`}
              >
                {/* Left: Label */}
                <div className="text-sm font-medium text-gray-500">Message</div>

                {/* Middle: Message Content */}
                <div className="flex-1 mx-4">
                  <p className="font-bold text-gray-700">{message.user}</p>
                  <p className="text-sm text-gray-600 truncate">{message.text}</p>
                </div>

                {/* Right: Mark as Read Button */}
                {!message.read && (
                  <button
                    className="text-blue-600 text-sm hover:underline"
                    onClick={() => markAsRead(message.id)}
                  >
                    Mark as Read
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* See All Messages Section */}
          <div className="px-4 py-3 text-center border-t">
            <button className="text-blue-600 font-medium hover:underline">
              <Link to="/AdminMessages" >See All Messages</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesDropdown;
