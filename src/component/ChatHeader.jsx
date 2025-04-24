import React from 'react';
import { useChatStore } from '../store/useChatStore';

import { X } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-3 border-bottom">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <div className="position-relative">
            <img
              src={selectedUser.profilePic}
              alt={selectedUser.name}
              className="rounded-circle object-fit-cover"
              style={{ width: '40px', height: '40px' }}
            />
          </div>

          <div>
            <h6 className="mb-0 fw-medium">{selectedUser.name}</h6>
            <small className="text-muted">
              {onlineUsers.includes(selectedUser._id) ? 'Online' : 'Offline'}
            </small>
          </div>
        </div>

        <button
          className="btn btn-sm btn-light d-flex align-items-center justify-content-center"
          onClick={() => setSelectedUser(null)}
          aria-label="Close Chat"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
