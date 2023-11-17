"use client"
import React from 'react';
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarLeftExpandFilled  } from 'react-icons/tb';

interface SidebarProps {
  // Define any props you need, for example:
  isOpen: boolean;
  onClose: () => void;
}

const LeftSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-default-secondary text-white transform ease-in-out duration-300 w-screen sm:w-max ${
        isOpen ? 'translate-x-0 z-50' : '-translate-x-full z-0'
      } lg:relative lg:translate-x-0`}
    >
      <button
        onClick={onClose}
        className={`absolute top-2 lg:hidden ${isOpen ? 'right-4 sm:-right-10' : '-right-10'}`}
      >
	  {isOpen ? (
		<TbLayoutSidebarLeftCollapseFilled className="m-2 h-6 w-6" />
	  ) : (
		<TbLayoutSidebarLeftExpandFilled className="m-2 h-6 w-6" />
		)}
	  </button>
      <nav className="flex flex-col space-y-4 px-2 p-8 mt-0">
		<button className='w-full px-4 py-2 hover:bg-default-secondary-3 text-default-white'>
			Assistant 2
		</button>
      </nav>
    </div>
  );
};

export default LeftSidebar 
