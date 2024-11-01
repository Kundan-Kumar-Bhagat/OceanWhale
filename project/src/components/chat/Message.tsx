import React from 'react';
import { format } from 'date-fns';
import { Check, CheckCheck } from 'lucide-react';

interface MessageProps {
  message: {
    id: string;
    text: string;
    sender: string;
    timestamp: Date;
    status?: 'sent' | 'delivered' | 'read';
  };
}

export default function Message({ message }: MessageProps) {
  const isSentByMe = message.sender === 'me';
  
  const StatusIcon = () => {
    if (!isSentByMe) return null;
    
    switch (message.status) {
      case 'read':
        return <CheckCheck className="w-4 h-4 text-blue-500" />;
      case 'delivered':
        return <CheckCheck className="w-4 h-4 text-gray-500" />;
      case 'sent':
        return <Check className="w-4 h-4 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex ${isSentByMe ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          isSentByMe ? 'bg-green-100' : 'bg-white'
        }`}
      >
        <p className="text-gray-800 whitespace-pre-wrap">{message.text}</p>
        <div className="flex items-center justify-end space-x-1 mt-1">
          <p className="text-xs text-gray-500">
            {format(message.timestamp, 'HH:mm')}
          </p>
          <StatusIcon />
        </div>
      </div>
    </div>
  );
}