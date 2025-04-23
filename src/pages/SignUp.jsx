import React, { useState } from "react";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore(); 

  const validateForm = () => {
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid Email");
    if (!formData.password.trim()) return toast.error("Password is required");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid === true) {
      console.log("Submitting form:", formData);
      signup(formData); 
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="bg-white shadow rounded p-4 w-100" style={{ maxWidth: "400px" }}>
        <div className="text-center mb-4">
          <div className="d-flex flex-column align-items-center gap-2">
            <div className="rounded-circle bg-light p-3 d-flex justify-content-center align-items-center">
              <MessageSquare size={28} className="text-primary" />
            </div>
            <h1 className="fs-4 fw-bold text-dark">Sign In</h1>
            <p className="text-muted">Welcome back! Please log in to your account.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 position-relative">
            <label className="form-label fw-medium">Email</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <Mail size={18} className="text-secondary" />
              </span>
              <input
                type="email"
                className="form-control border-start-0"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="mb-3 position-relative">
            <label className="form-label fw-medium">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <Lock size={18} className="text-secondary" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control border-start-0"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
            disabled={isSigningUp}
          >
            {isSigningUp ? (
              <>
                <Loader2 size={18} className="spinner-border spinner-border-sm" />
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="text-center text-muted mt-3">
          Don't have an account?{" "}
          <Link to="/login" className="text-primary text-decoration-none">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
