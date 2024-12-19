import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white py-6  ">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Project Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
