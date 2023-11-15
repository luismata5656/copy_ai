'use client'
import React from 'react'
import Message from '@/components/chat/Message'

export default function ChatWindow() {
return (
	<div className='flex flex-col justify-start items-center w-full h-full bg-default-primary p-0 '>
		<div className='w-full lg:w-1/2 p-16 h-full text-default-white mt-16 mb-32 overflow-y-auto snap-y'>
			<Message isUser={false}/>
			<Message isUser={true}/>
			<Message isUser={false}/>
			<Message isUser={true}/>
			<Message isUser={false}/>
			<Message isUser={true}/>
			<Message isUser={false}/>
			<Message isUser={true}/>
			<Message isUser={false}/>
			<Message isUser={true}/>
			<Message isUser={false}/>
			<Message isUser={true}/>
			<Message isUser={false}/>
		</div>
		  <form className='absolute bottom-0 w-1/2 mx-8 mb-16'>
          <input
            className="w-full h-full p-4 border border-gray-300 rounded shadow-xl bg-slate-200 hover:bg-slate-300"
            placeholder="Say something..."
          />
		  </form>
	</div>
)
} 
