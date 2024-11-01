import React from 'react';
import { useChat } from '../../context/ChatContext';
import ChatListItem from './ChatListItem';

export default function ChatList() {
  const { chats, setCurrentChat } = useChat();
  
  return (
    <div className="flex-1 overflow-y-auto">
      {chats.map((chat) => (
        <ChatListItem
          key={chat.id}
          chat={chat}
          onClick={() => setCurrentChat(chat)}
        />
      ))}
    </div>
  );
}