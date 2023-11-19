"use client"
import {useState} from 'react';
import RightSidebar from '@/components/RightSidebar';
import LeftSidebar from '@/components/LeftSidebar';
import MessageList from '@/components/chat/MessageList';
import Auth from '@/components/auth/Auth'
import Register from '@/components/auth/Register';
import SettingsModal from '@/components/SettingsModal';

type Message = {
	message: string;
	isUser: boolean;
}

export default function Home() {
	const isAuthenticated = true;
	const messages: Message[] = [
		{message: 'Hello User!', isUser: false},
		{message: 'Hello Computer, how are you?', isUser: true},
		{message: 'As an LLM, I can\'t have a mood :(', isUser: false},
	];

	const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
	const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

	const toggleLeftSidebar = () => {
		setIsLeftSidebarOpen(!isLeftSidebarOpen);
	};
	const toggleRightSidebar = () => {
		setIsRightSidebarOpen(!isRightSidebarOpen);
	};

	const [isRegisterOpen, setIsRegisterOpen] = useState(false)
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)
	return (
		<main className='flex h-screen w-screen bg-default-primary overflow-x-hidden'>
			<LeftSidebar isOpen={isLeftSidebarOpen} onClose={() => toggleLeftSidebar()} showSettings={() => setIsSettingsOpen(true)} />
			<div className='flex-1'>
				<div className='flex flex-col justify-start items-center w-full h-full p-0 overflow-y-auto'>
					{isAuthenticated ? (
						<>

							<div className='w-full h-full text-default-white mt-0 mb-32'>
								<MessageList messages={messages} />
							</div>
							<form className='flex items-center absolute bottom-0 w-full sm:w-1/2 mb-16'>
								<input
									className="h-full p-4 mx-8 sm:mx-auto w-full border border-gray-300 rounded shadow-xl"
									placeholder="Say something..."
								/>
							</form>
						</>
					) : (
						<>

							{isRegisterOpen ? (
								<Register showLogin={() => setIsRegisterOpen(false)} />
							) : (
								<Auth showRegister={() => setIsRegisterOpen(true)} />
							)}
						</>
					)}
				</div>
			</div>
			<RightSidebar isOpen={isRightSidebarOpen} onClose={() => toggleRightSidebar()} />
			<SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
		</main>
	)
}
