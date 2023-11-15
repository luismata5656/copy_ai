"use client"
import React from 'react';
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarLeftExpandFilled  } from 'react-icons/tb';
import ChatItem from './chat/Chat';

interface SidebarProps {
  // Define any props you need, for example:
  isOpen: boolean;
  onClose: () => void;
}

const LeftSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full z-50 bg-default-secondary text-white transform ease-in-out duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:relative lg:translate-x-0`}
    >
      <button
        onClick={onClose}
        className="absolute -right-10 top-2 lg:hidden"
      >
	  {isOpen ? (
		<TbLayoutSidebarLeftCollapseFilled className="m-2 h-6 w-6" />
	  ) : (
		<TbLayoutSidebarLeftExpandFilled className="m-2 h-6 w-6" />
		)}
	  </button>
      <nav className="flex flex-col space-y-4 p-8">
		<ChatItem name='Assistant 1'/>
		<ChatItem name='Assistant 2'/>
		<ChatItem name='Assistant 3'/>
		<ChatItem name='Assistant 4'/>
		<ChatItem name='Assistant 5'/>
      </nav>
    </div>
  );
};

export default LeftSidebar 
