import React, { useState } from 'react';
import { Send, Paperclip, MoreVertical, Smile } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';
import { useChat } from '../../context/ChatContext';
import MessageList from './MessageList';

export default function ChatWindow() {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { currentChat, sendMessage } = useChat();

  if (!currentChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Select a chat to start messaging</p>
      </div>
    );
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  const onEmojiClick = (emojiData: any) => {
    setMessage((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 bg-gray-50 border-b flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={currentChat.avatar}
            alt={currentChat.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{currentChat.name}</h2>
            <p className="text-sm text-gray-500">Online</p>
          </div>
        </div>
        <MoreVertical className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>

      <MessageList />

      <form onSubmit={handleSend} className="p-4 border-t bg-white relative">
        <div className="flex items-center space-x-4">
          <Paperclip className="w-5 h-5 text-gray-500 cursor-pointer" />
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="text-gray-500 hover:text-gray-700"
          >
            <Smile className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 py-2 px-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="p-2 bg-green-500 rounded-full text-white hover:bg-green-600"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        {showEmojiPicker && (
          <div className="absolute bottom-20 right-0">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}
      </form>
    </div>
  );
}