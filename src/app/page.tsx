import Image from 'next/image';
import Sidebar from '@/components/Sidebar'
import ChatWindow from '@/components/ChatWindow'

export default function Home() {
  return (
	<main className='flex h-screen w-screen'>
		<Sidebar />
		<ChatWindow />
	</main>
  )
}
