import Navbar from './component/Navbar'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import { useAuthStore } from './store/useAuthStore'
import { useThemeStore } from './store/UseThemeStore'

import { Routes, Route, Navigate } from "react-router";
import { useEffect } from "react";

import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  const { theme } = useThemeStore();

  console.log({ onlineUsers });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color');
  }, [theme]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="main-content">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUp /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LogIn/> : <Navigate to="/" />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={authUser ? <Profile/> : <Navigate to="/login" />} />
      </Routes>
      </div>
      <Toaster />
    </div>
  );
};

export default App;
