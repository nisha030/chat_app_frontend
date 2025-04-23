import React, { useState } from 'react';
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from 'lucide-react';
import { Link, useNavigate } from 'react-router'; 
import AuthImagePattern from '../component/AuthImagePattern';
import { useAuthStore } from '../store/useAuthStore';

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { login, isLoggingIn } = useAuthStore();
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data:', formData);

        try {
            await login(formData);
            navigate("/");
        } catch (error) {
            console.error("Login error:", error);
            
        }

        setFormData({
            email: '',
            password: '',
        });
    };

    return (
        <div className="container-fluid min-vh-100 d-flex">
            <div className="row flex-grow-1">
                
                {/* Left Side */}
                <div className="col-lg-6 d-flex align-items-center justify-content-center p-4">
                    <div className="w-100" style={{ maxWidth: '400px' }}>
                        
                        {/* Logo */}
                        <div className="text-center mb-4">
                            <div className="d-flex flex-column align-items-center">
                                <div className="icon-container">
                                    <MessageSquare className="text-primary" size={24} />
                                </div>
                                <h1 className="fs-3 fw-bold text-dark mt-2">Log In</h1>
                                <p className="text-muted">Access your account</p>
                            </div>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                            <div className="mb-3">
                                <label className="form-label text-dark">Email</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <Mail className="text-secondary" />
                                    </span>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-dark">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <Lock className="text-secondary" />
                                    </span>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary password-toggle"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100 login-btn"
                                disabled={isLoggingIn}
                            >
                                {isLoggingIn ? (
                                    <>
                                        <Loader2 className="spinner-border spinner-border-sm me-2" />
                                        Logging In...
                                    </>
                                ) : (
                                    "Log In"
                                )}
                            </button>
                        </form>

                        <p className="text-center text-muted mt-3">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-primary fw-bold">Sign up</Link>
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="col-lg-6 d-none d-lg-block bg-light">
                    <AuthImagePattern
                        title="Welcome Back"
                        subtitle="Log in to continue connecting with friends and sharing moments"
                    />
                </div>

            </div>
        </div>
    );
};

export default LogIn;
