import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`relative top-0 left-0 h-full bg-gray-900 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold">Sidebar</h2>
          <ul className="mt-4">
            <li className="mt-2"><a href="#home">Home</a></li>
            <li className="mt-2"><a href="#services">Services</a></li>
            <li className="mt-2"><a href="#about">About</a></li>
            <li className="mt-2"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <button
        className={`fixed top-4 left-4 text-white z-50 transition-transform transform ${isOpen ? 'translate-x-64' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={15} />
      </button>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Sidebar;
