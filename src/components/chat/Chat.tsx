import React from 'react'

export default function ChatItem({name}:{name:string}) {
return (
	<div className='border border-solid border-1 border-default-secondary-2 m-2 p-1 w-10/12'> 
		{name}
	</div>

)
}
