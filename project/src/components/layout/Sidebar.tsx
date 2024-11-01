import React from 'react';
import { Search, MessageSquare, MoreVertical, Users } from 'lucide-react';
import ChatList from '../chat/ChatList';

export default function Sidebar() {
  return (
    <div className="w-[350px] border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4 bg-gray-50 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <span className="font-semibold">You</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-600">
          <Users className="w-5 h-5 cursor-pointer hover:text-gray-900" />
          <MessageSquare className="w-5 h-5 cursor-pointer hover:text-gray-900" />
          <MoreVertical className="w-5 h-5 cursor-pointer hover:text-gray-900" />
        </div>
      </div>
      
      <div className="p-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search or start new chat"
            className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-500" />
        </div>
      </div>
      
      <ChatList />
    </div>
  );
}