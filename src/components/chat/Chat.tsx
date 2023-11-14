import React from 'react'

export default function ChatItem({name}:{name:string}) {
return (
	<button className='text-left p-2 rounded-md w-full hover:bg-default-secondary-3'> 
		{name}
	</button>
)
}
