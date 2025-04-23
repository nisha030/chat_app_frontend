import React from 'react';
import { Link } from 'react-router';
import { LogOut, MessageSquare, Settings, User } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="bg-light border-bottom position-fixed w-100 top-0 z-3 shadow-sm" style={{ backdropFilter: 'blur(8px)' }}>
      <div className="container px-3">
        <div className="d-flex align-items-center justify-content-between" style={{ height: '4rem' }}>
          
         
          <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none text-dark">
            <div className="d-flex align-items-center justify-content-center rounded bg-light bg-opacity-10" style={{ width: '36px', height: '36px' }}>
              <MessageSquare size={20} className="text-primary" />
            </div>
            <h1 className="h5 m-0 fw-bold">Yapp</h1>
          </Link>

         
          <div className="d-flex align-items-center gap-2">
            <Link to="/settings" className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-2">
              <Settings size={16} />
              <span className="d-none d-sm-inline">Settings</span>
            </Link>

            {!authUser && (
              <>
                <Link to="/profile" className="btn btn-sm btn-outline-warning d-flex align-items-center gap-2">
                  <User size={16} />
                  <span className="d-none d-sm-inline">Profile</span>
                </Link>

                <button onClick={logout} className="btn btn-sm btn-outline-danger d-flex align-items-center gap-2">
                  <LogOut size={16} />
                  <span className="d-none d-sm-inline">Logout</span>
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
