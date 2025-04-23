import React, { useEffect, useState } from 'react';
import SidebarSkeleton from './skeletons/SidebarSkeleton';
import { Users } from 'lucide-react';
import { useChatStore } from '../store/useChatStore';
import { useAuthStore } from '../store/useAuthStore';

const Sidebar = () => {
  const { users, getUsers, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const {showOnlineOnly, setShowOnlineOnly} = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUser = showOnlineOnly ? users.filter(user => onlineUsers.includes(user._id)) : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-100  border-end d-flex flex-column transition-all" style={{ width: '18rem' }}>
      <div className="border-bottom w-100 p-3">
        <div className="d-flex align-items-center gap-2">
          <Users size={24} />
          <span className="fw-medium d-none d-lg-block">Contacts</span>
        </div>

        <div className="mt-3 hidden lg:flex gap-2 items-center">
          <label  className="cursor-pointer flex items-center gap-2">
    <input
     type="checkbox"
     checked={showOnlineOnly} 
     onChange={(e) => setShowOnlineOnly(e.target.checked)}
     className="checkbox checkbox-sm" />
     <span className="text-sm">
      Show Online Only
     </span>
          </label>
          <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span>
        </div>
      </div>

      <div className="overflow-auto w-100 py-3 px-2">
        {filteredUser.length === 0 ? (
          <div className="w-100 d-flex align-items-center justify-content-center flex-column p-4 bg-light text-center">
            <h2 className="h5 fw-bold">No Contacts Found</h2>
            <p className="text-muted">Please add contacts to start chatting</p>
          </div>
        ) : (
          users.map((user) => (
            <div
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`w-100 d-flex align-items-center gap-3 p-3 rounded cursor-pointer ${
                selectedUser?._id === user._id ? 'bg-light border' : ''
              }`}
              style={{ transition: 'all 0.2s ease-in-out' }}
            >
              <div className="position-relative mx-auto mx-lg-0">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="rounded-circle object-fit-cover"
                  style={{ width: '48px', height: '48px' }}
                />
                {onlineUsers.includes(user._id) && (
                  <span
                    className="position-absolute"
                    style={{
                      width: '10px',
                      height: '10px',
                      backgroundColor: 'green',
                      borderRadius: '50%',
                      bottom: '0',
                      right: '0',
                      border: '2px solid white',
                    }}
                  />
                )}
              </div>

              <div className="d-none d-lg-block text-start flex-grow-1">
                <h6 className="mb-1 text-truncate">{user.name}</h6>
                <div className="text-muted small text-truncate">
                  {onlineUsers.includes(user._id) ? 'Online' : 'Offline'}
                </div>
                <p className="text-muted small text-truncate mb-0">{user.email}</p>
              </div>
            </div>
          ))
        )}
        {filteredUser.length === 0 && (
          <div className="text-center text-zinc-500 py-4">No Online User</div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
