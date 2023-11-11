import React from 'react'
import ChatItem from '@/components/chat/Chat'
import { TbDotsVertical, TbLayoutSidebarRightCollapseFilled, TbLayoutSidebarLeftCollapseFilled } from 'react-icons/tb'

export default function Sidebar() {
return (
	<div className='flex flex-col h-full text-default-white w-1/5 h-full bg-default-secondary'>
	<div className='mx-4 mt-4 h-16'>
		<div className='w-full flex gap-4'>
		<button className='w-5/6 btn rounded-md text-left border border-solid border-1 border-default-secondary-3 p-1 hover:bg-default-secondary-3'>
			New Chat
		</button>
		<button className='w-1/6 border border-default-secondary-3 text-center p-2 rounded-md p-1'>
			<TbLayoutSidebarLeftCollapseFilled />
		</button>
		</div>
	</div>
	<div className='mx-4 flex-1 overflow-y-auto'> 
		<div className='w-full flex flex-col gap-4'>
		<ChatItem name="Chat 1123"/>
		<ChatItem name="Chat 2"/>
		<ChatItem name="Chat 3"/>
		<ChatItem name="Chat 4"/>
		<ChatItem name="Chat 5"/>
		</div>
	</div>
	<div className='p-4 border-t border-default-accent flex flex-row items-center'>
		<div className='w-1/6 rounded-full border border-default-secondary-2 text-center p-2'> 
			P
		</div>	
		<div className='w-2/3 text-left m-2'>
			Name
		</div>
		<div className='w-1/6 rounded-md border border-default-secondary-2 p-2'>
		<TbDotsVertical />
		</div>
	</div>
	</div>
)
}
