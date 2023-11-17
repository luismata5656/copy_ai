import React from 'react';
import Message from './Message';

// Define the Message type
type _Message = {
  message: string;
  isUser: boolean;
};

// Define the props type for the component
type MessageListProps = {
  messages: _Message[];
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className='flex flex-col m-2 sm:p-4 mt-16 space-y-2'>
      {messages.length > 0 ? (
        messages.map((msg, index) => (
			<Message isUser={msg.isUser} message={msg.message}/>
        ))
      ) : (
        <div className='text-center text-gray-500'>
          No messages yet. Start the conversation!
        </div>
      )}
    </div>
  );
};

export default MessageList;
