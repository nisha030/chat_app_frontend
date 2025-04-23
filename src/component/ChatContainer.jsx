import React, { useEffect, useRef } from 'react';
import { useChatStore } from '../store/useChatStore';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import MessageSkeleton from './skeletons/MessageSkeleton';
import { formatMessageTime } from '../lib/utils';
import { useAuthStore } from '../store/useAuthStore';
import { use } from 'react';

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser, subscribeToMessages, unSubscribeFromMessages } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (selectedUser?._id) {
      getMessages(selectedUser._id);

      subscribeToMessages();
      return () => unSubscribeFromMessages();
    }
  }, [selectedUser._id, getMessages, subscribeToMessages ,unSubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {  
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-grow d-flex flex-column overflow-auto">
        <ChatHeader />

        <div className="flex-grow overflow-auto p-3">
          <MessageSkeleton />
        </div>

        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-grow d-flex flex-column overflow-auto">
      <ChatHeader />

      <div className="flex-grow overflow-auto p-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`d-flex mb-4 ${message.senderId === authUser._id ? 'justify-content-end' : 'justify-content-start'}`}
            ref={messageEndRef}
          >
            <div className="d-flex flex-column align-items-center me-2">
              <img
                src={message.senderId === authUser._id ? authUser.profilePic : selectedUser.profilePic}
                alt="profile"
                className="rounded-circle border"
                style={{ width: '40px', height: '40px' }}
              />
              <small className="text-muted mt-1">{formatMessageTime(message.createdAt)}</small>
            </div>

            <div className="bg-light rounded p-2 shadow-sm" style={{ maxWidth: '70%' }}>
              {message.image && (
                <img
                  src={message.image}
                  alt="Attached"
                  className="img-fluid rounded mb-2"
                  style={{ maxWidth: '200px' }}
                />
              )}
              {message.text && <p className="mb-0">{message.text}</p>}
            </div>
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
