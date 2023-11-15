"use client"
import React from 'react';
import { TbLayoutSidebarRightCollapseFilled, TbLayoutSidebarRightExpandFilled  } from 'react-icons/tb';

interface SidebarProps {
  // Define any props you need, for example:
  isOpen: boolean;
  onClose: () => void;
}

const RightSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full z-50 bg-default-secondary text-white transform ease-in-out duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } lg:relative lg:translate-x-0`}
    >
      <button
        onClick={onClose}
        className="absolute -left-10 top-2 lg:hidden"
      >
	  {isOpen ? (
		<TbLayoutSidebarRightCollapseFilled className="m-2 h-6 w-6" />
	  ) : (
		<TbLayoutSidebarRightExpandFilled className="m-2 h-6 w-6" />
		)}
	  </button>
      <nav className="flex flex-col space-y-4 p-8">
        {/* Navigation Links */}
        <a href="/dashboard" className="hover:bg-gray-700 p-2 rounded">
          Dashboard
        </a>
        <a href="/settings" className="hover:bg-gray-700 p-2 rounded">
          Settings
        </a>
        {/* Add more navigation links here */}
      </nav>
    </div>
  );
};

export default RightSidebar;
