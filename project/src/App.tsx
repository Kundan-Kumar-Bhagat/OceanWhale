import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { ChatProvider } from './context/ChatContext';
import { useAuth } from './context/AuthContext';
import LoginForm from './components/auth/LoginForm';
import Sidebar from './components/layout/Sidebar';
import ChatWindow from './components/chat/ChatWindow';

function ChatApp() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ChatProvider>
        <ChatApp />
      </ChatProvider>
    </AuthProvider>
  );
}

export default App;