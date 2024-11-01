import React from 'react';
import { useChat } from '../../context/ChatContext';
import Message from './Message';

export default function MessageList() {
  const { messages } = useChat();
  
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#e5ded8]">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}