"use client"
import { useState } from 'react';
import RightSidebar from '@/components/RightSidebar';
import ChatWindow from '@/components/ChatWindow'


export default function Home() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};
	return (
			<main className='flex h-screen w-screen bg-default-primary overflow-x-hidden'>
				<RightSidebar isOpen={isSidebarOpen} onClose={() => toggleSidebar()}/>
				<div className='flex-1 p-4'>
				<ChatWindow />
				</div>
			</main>
	)
}
