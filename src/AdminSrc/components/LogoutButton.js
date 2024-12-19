import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
   
    console.log("User logged out");
    
  };

  return (
    <button
      onClick={handleLogout}
      className="border-2 text-white font-bold py-1 px-2 rounded-md   focus:outline-none focus:ring-2  focus:ring-offset-2"
    >
      Logout
  
    </button>
  );
};

export default LogoutButton;
