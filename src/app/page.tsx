"use client"
import { useState } from 'react';
import RightSidebar from '@/components/RightSidebar';
import ChatWindow from '@/components/ChatWindow'
import LeftSidebar from '@/components/LeftSidebar';


export default function Home() {
	const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
	const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

	const toggleLeftSidebar = () => {
		setIsLeftSidebarOpen(!isLeftSidebarOpen);
	};
	const toggleRightSidebar = () => {
		setIsRightSidebarOpen(!isRightSidebarOpen);
	};
	return (
			<main className='flex h-screen w-screen bg-default-primary overflow-x-hidden'>
				<LeftSidebar isOpen={isLeftSidebarOpen} onClose={() => toggleLeftSidebar()}/>
				<div className='flex-1 p-4'>
				<ChatWindow />
				</div>
				<RightSidebar isOpen={isRightSidebarOpen} onClose={() => toggleRightSidebar()}/>
			</main>
	)
}
