import React from 'react'
import ChatItem from '@/components/chat/Chat'


export default function Sidebar() {
return (
	<div className='flex flex-col h-full text-default-white w-1/5 h-full bg-default-secondary'>
	<div className='h-16'>
		Top Controls
	</div>
	<div className='flex-1 w-full flex flex-col items-center overflow-y-auto'> 
		<ChatItem name="Chat 1"/>
		<ChatItem name="Chat 2"/>
		<ChatItem name="Chat 3"/>
		<ChatItem name="Chat 4"/>
		<ChatItem name="Chat 5"/>
	</div>
	<div>
		Bottom Controls
	</div>
	</div>
)
}
