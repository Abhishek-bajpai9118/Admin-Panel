import { MdAppRegistration } from "react-icons/md";

import { GrUpdate } from "react-icons/gr";

import { MdBlockFlipped } from "react-icons/md";

import { TbReportSearch } from "react-icons/tb";

import { CgProfile } from "react-icons/cg";

import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineHelpOutline } from "react-icons/md";

import { IoSettingsOutline } from "react-icons/io5";
import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
// import logo from 
// import AdminSetting from "./AdminSetting";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Links Array
  const sections = [
    {
      icon: <MdAppRegistration  className="w-5 h-5" />,
      title: "New Registration",
      links: [
        { to: "/Clientregistration", label: "Client Registration" },
        { to: "/Developerregistration", label: "Developer Registration" },
      ],
    },
    {
      icon: <GrUpdate  />,
      title: "Update",
      links: [
        { to: "/AdminUpdateClient", label: "Update Client" },
        { to: "/AdminUpdateDeveloper", label: "Update Developer" },
      ],
    },
    {
      icon: <MdBlockFlipped  className="w-5 h-5" />,
      title: "Block User",
      links: [
        {to: "/AdminBlockClient", label: "Block Client"},
        { to: "/AdminBlockDeveloper", label: "Block Developer" },
      ],
    },
  ];

  const staticLinks = [
    { icon: <TbReportSearch className="w-5 h-5"/>, label: <span className="font-bold">Report</span>, to: "/AdminReport" },
    { icon: <CgProfile  className="w-5 h-5" />, label: <span className="font-bold">My profile</span>, to: "/AdminProfile" },
    { icon: <IoSettingsOutline  className=""/>, label: <span className="font-bold">Settings</span>, to: "/AdminSetting" },
    { icon: <HiOutlineLogout  className="w-5 h-5"/>, label: <LogoutButton />, to: "/" },
  ];

  return (
    <>
      {/* Hamburger Icon */}
      <div className="fixed top-4 left-4 z-50 md:hidden ">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-black text-white rounded-md focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-black text-white w-[260px] h-screen p-6 fixed top-0 left-0 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        {/* Close Button for Mobile */}
        <div className="md:hidden text-right mb-4">
          <button
            onClick={toggleSidebar}
            className="p-2 bg-gray-700 rounded-md focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Logo Section */}
        <div className="text-2xl font-bold mb-6">
          <NavLink to="/" className="text-white">
            <img src="logo.jpg" className="h-20 w-34 pl-4" alt="Logo" />
          </NavLink>
        </div>

        {/* Sidebar Sections */}
        {sections.map((section, index) => (
          <SidebarSection key={index} title={section.title} links={section.links} icon={section.icon} />
        ))}

        {/* Static Links */}
        {staticLinks.map((link, index) => (
          <StaticLink key={index} icon={link.icon} label={link.label} to={link.to} />
        ))}

        {/* Help Section */}
        <div className="mt-16 flex items-center">
          <MdOutlineHelpOutline />
          <div className="cursor-pointer text-white ml-2">
          <NavLink to="/Help" className="text-white">
            Help
          </NavLink>
        </div>
        </div>
      </div>
    </>
  );
};

// Sidebar Section Component
const SidebarSection = ({ title, links, icon }) => (
  <div className="mb-6 group">
    {/* Section Title with Icon */}
    <div className="cursor-pointer flex items-center mb-2">
      <div className="mr-3">{icon}</div>
      <span className="font-bold">{title}</span>
    </div>
    {/* Section Links */}
    <div className="pl-9 mt-2 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
      {links.map((link, index) => (
        <NavLink key={index} to={link.to} className="block text-white py-2">
          {link.label}
        </NavLink>
      ))}
    </div>
  </div>
);

// Static Link Component
const StaticLink = ({ icon, label, to }) => (
  <div className="cursor-pointer mt-4 flex items-center">
    <NavLink to={to} className="text-white flex items-center">
      {icon}
      <span className="ml-3">{label}</span>
    </NavLink>
  </div>
);

// Icon Components








export default Sidebar;
