import React from 'react'

export default function Message({isUser}: {isUser: boolean}) {
return (
	<>
		{isUser ? (
		<>
			<div className='border border-solid border-0 border-b-4 border-default-accent w-min m-2 p-1 ms-auto'>
				User
			</div>
			<div className='w-full p-2 text-right'>
				This is a message from the User for the Computer
			</div>
		</>
		) : (
		<>
			<div className='border border-solid border-0 border-b-4 border-default-secondary-2 w-min m-2 p-1 '>
				Computer
			</div>
			<div className='w-full p-2 '>
				This is a message from the Computer for the User
			</div>
		</>
		)}
	</>
)
}
