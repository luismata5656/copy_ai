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
      className={`fixed top-0 right-0 h-full bg-default-secondary text-white transform ease-in-out duration-300 w-screen sm:w-max ${
        isOpen ? 'translate-x-0 z-50' : 'translate-x-full z-0'
      } lg:relative lg:translate-x-0`}
    >
      <button
        onClick={onClose}
        className={`absolute top-2 lg:hidden ${isOpen ? 'left-4 sm:-left-10' : '-left-10'}`}
      >
	  {isOpen ? (
		<TbLayoutSidebarRightCollapseFilled className="m-2 h-6 w-6" />
	  ) : (
		<TbLayoutSidebarRightExpandFilled className="m-2 h-6 w-6" />
		)}
	  </button>
      <nav className="flex flex-col h-full space-y-4 px-4 pt-8">
				<div className='flex-1 flex flex-col'>
					<button className='px-4 py-2 hover:bg-default-secondary-3 text-default-white'>
					Input
					</button>
					<button className='px-4 py-2 hover:bg-default-secondary-3 text-default-white'>
					Input
					</button>
					<button className='px-4 py-2 hover:bg-default-secondary-3 text-default-white'>
					Input
					</button>
					<button className='px-4 py-2 hover:bg-default-secondary-3 text-default-white'>
					Input
					</button>
					<button className='px-4 py-2 hover:bg-default-secondary-3 text-default-white'>
					Input
					</button>
				</div>
				<div className='flex items-center gap-4 border-t w-full px-4 py-8 border-default-accent'>
					<div className=''>
						Workflows
					</div>
				</div>
      </nav>
    </div>
  );
};

export default RightSidebar;
