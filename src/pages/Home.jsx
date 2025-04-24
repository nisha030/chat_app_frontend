import React from 'react';
import { useChatStore } from '../store/useChatStore';

import NoChatSelected from '../component/NoChatSelected';
import ChatContainer from '../component/ChatContainer';

const Home = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="vh-100 bg-light">
      <div className="d-flex align-items-center justify-content-center pt-8 px-3" style={{ paddingTop: '5rem' }}>
        <div className="bg-white rounded shadow w-100" style={{ maxWidth: '1200px', height: 'calc(100vh - 8rem)' }}>
          <div className="d-flex h-100 rounded overflow-hidden">
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
