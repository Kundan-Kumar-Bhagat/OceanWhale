import React from 'react';
import { formatDistanceToNow } from 'date-fns';

interface ChatListItemProps {
  chat: {
    id: string;
    name: string;
    lastMessage: string;
    timestamp: Date;
    avatar: string;
  };
  onClick: () => void;
}

export default function ChatListItem({ chat, onClick }: ChatListItemProps) {
  return (
    <div
      onClick={onClick}
      className="flex items-center p-3 cursor-pointer hover:bg-gray-100 transition-colors"
    >
      <img
        src={chat.avatar}
        alt={chat.name}
        className="w-12 h-12 rounded-full"
      />
      <div className="ml-4 flex-1">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">{chat.name}</h3>
          <span className="text-xs text-gray-500">
            {formatDistanceToNow(chat.timestamp, { addSuffix: true })}
          </span>
        </div>
        <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
      </div>
    </div>
  );
}