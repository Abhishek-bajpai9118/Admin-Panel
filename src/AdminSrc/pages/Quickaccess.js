import React, { useState, useRef, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import { MdEmail, MdBarChart, MdPayment, MdReceipt } from "react-icons/md";
import { SiDatabricks } from "react-icons/si";

const QuickAccess = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const shortcuts = [
    { id: 1, name: "Calendar", icon: <SlCalender />, link: "https://calendar.google.com/calendar/u/0/r?pli=1" },
    { id: 2, name: "Email", icon: <MdEmail />, link: "https://mail.google.com/mail/u/0/#inbox" },
    { id: 3, name: "Report", icon: <MdBarChart />, link: "/report" },
    { id: 4, name: "Payment", icon: <MdPayment />, link: "/payment" },
    { id: 5, name: "Invoice", icon: <MdReceipt />, link: "/invoice" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if click is outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close the dropdown if clicked outside
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside of dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Quick Access Icon */}
      <button
        className="flex items-center px-4 py-2 text-white rounded-lg focus:outline-none"
        onClick={toggleDropdown}
      >
        <SiDatabricks className="w-8 h-8 text-white" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute -left-44 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Quick Access</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {shortcuts.map((shortcut) => (
                <a
                  key={shortcut.id}
                  href={shortcut.link}
                  className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg hover:bg-blue-100 transition"
                >
                  <div className="text-4xl text-blue-500 mb-2">{shortcut.icon}</div>
                  <span className="text-sm font-medium text-gray-700">
                    {shortcut.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickAccess;
