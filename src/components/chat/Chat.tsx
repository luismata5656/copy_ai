import React from 'react'

export default function ChatItem({name}:{name:string}) {
return (
	<button className='text-left border border-solid border-1 border-default-secondary-2 p-1 rounded-md w-full hover:bg-default-secondary-3'> 
		{name}
	</button>

)
}
