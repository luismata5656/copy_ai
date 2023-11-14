"use client"
import React, {useState} from 'react'
import ChatItem from '@/components/chat/Chat'
import {TbDotsVertical, TbPlus, TbFolderPlus, TbLayoutSidebarLeftExpandFilled, TbLayoutSidebarLeftCollapseFilled} from 'react-icons/tb'

export default function LeftSidebar() {
	const [sidebarVisible, setSidebarVisible] = useState(true)
	return (
		<div className='w-1/3 h-full lg:w-1/5'>

			<div className={sidebarVisible ? 'relative w-full h-full' : 'relative w-0'}>

				<div className={sidebarVisible ? 'flex flex-col h-full text-default-white w-full h-full bg-default-secondary relative' : 'hidden'}>
					<div className='mx-4 mt-4 h-16'>
						<div className='w-full flex gap-4'>
							<button className='flex items-center w-5/6 btn rounded-md text-left border border-solid border-1 border-default-secondary-3 p-1 hover:bg-default-secondary-3'>
								<TbPlus className="m-2" />New Chat
							</button>
							<button className='flex items-center justify-center w-1/6 border border-default-secondary-3 text-center rounded-md p-1'>
								<TbFolderPlus />
							</button>
						</div>
					</div>
					<div className='mx-4 flex-1 overflow-y-auto'>
						<div className='w-full flex flex-col gap-4'>
							<ChatItem name="Assistant 1" />
							<ChatItem name="Assistant 2" />
							<ChatItem name="Assistant 3" />
							<ChatItem name="Assistant 4" />
							<ChatItem name="Assistant 5" />
						</div>
					</div>
					<div className='p-4 border-t border-default-accent flex flex-row items-center'>
						<div className='w-1/6 rounded-full border border-default-secondary-2 text-center p-2'>
							P
						</div>
						<div className='w-2/3 text-left m-2'>
							Name
						</div>
						<button className='flex items-center justify-center w-1/6 rounded-md border border-default-secondary-2 p-2'>
							<TbDotsVertical />
						</button>
					</div>
				</div>
				<button className='absolute -right-8 top-4 h-8 w-8 text-default-white' onClick={() => setSidebarVisible(!sidebarVisible)}>
					{sidebarVisible ? (
						<TbLayoutSidebarLeftCollapseFilled className="m-2 h-6 w-6" />
					) : (
						<TbLayoutSidebarLeftExpandFilled className="m-2 h-6 w-6" />
					)}
				</button>
			</div>
		</div>
	)
}
