import React, { createContext, useContext, useState, useCallback } from 'react';

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: Date;
  avatar: string;
}

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  status?: 'sent' | 'delivered' | 'read';
}

interface ChatContextType {
  chats: Chat[];
  messages: Message[];
  currentChat: Chat | null;
  setCurrentChat: (chat: Chat) => void;
  sendMessage: (text: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [chats] = useState<Chat[]>([
    {
      id: '1',
      name: 'John Doe',
      lastMessage: 'Hey, how are you?',
      timestamp: new Date(),
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    {
      id: '2',
      name: 'Jane Smith',
      lastMessage: 'See you tomorrow!',
      timestamp: new Date(),
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hey, how are you?',
      sender: 'other',
      timestamp: new Date(),
    },
    {
      id: '2',
      text: 'I\'m good, thanks! How about you?',
      sender: 'me',
      timestamp: new Date(),
      status: 'read',
    },
  ]);

  const [currentChat, setCurrentChat] = useState<Chat | null>(null);

  const sendMessage = useCallback((text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'me',
      timestamp: new Date(),
      status: 'sent',
    };
    setMessages((prev) => [...prev, newMessage]);
    
    // Simulate message status updates
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessage.id ? { ...msg, status: 'delivered' } : msg
        )
      );
    }, 1000);

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessage.id ? { ...msg, status: 'read' } : msg
        )
      );
    }, 2000);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        chats,
        messages,
        currentChat,
        setCurrentChat,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}