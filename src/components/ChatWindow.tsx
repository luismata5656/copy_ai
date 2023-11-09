import React from 'react'
import Message from '@/components/chat/Message'

export default function ChatWindow() {
return (
	<div className='flex justify-center w-full h-full bg-default-primary p-0 overflow-y-auto'>
		<div className='w-1/2 h-max text-default-white mt-16'>
			<Message isUser={false}/>
			<Message isUser={true}/>
			<Message isUser={false}/>
		</div>
	</div>
)
} 
