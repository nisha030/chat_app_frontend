import React, { useState } from 'react';
import { Camera, Mail, User } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';


const Profile = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="card shadow p-4 " style={{ maxWidth: '500px', width: '100%', marginTop: '5rem'}}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">Profile</h2>
          <p className="text-muted">Your Profile Information</p>
        </div>

        <div className="text-center position-relative">
          <img
            src={selectedImage || authUser?.profilePic}
            alt="profile"
            className=" p-2 border border-secondary object-fit-cover rounedd-circle shadow-sm"
            style={{ borderRadius: '50%', width: '70px', height: '70px' }}
          
          />
          <label htmlFor="avatar-upload" className="position-absolute bottom-0 end-0 btn btn-light p-2 rounded-circle shadow-sm">
            <Camera size={18} className="text-secondary" />
            <input
              type="file"
              id="avatar-upload"
              className="d-none"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={isUpdatingProfile}
              width="100"
              height="100"
            />
          </label>
          <p className="mt-2 text-muted small">{isUpdatingProfile ? 'Updating Profile...' : 'Click the icon to upload'}</p>
        </div>

        {/* Profile Info */}
        <div className="mt-3">
          <div className="mb-3">
            <label className="form-label fw-medium">
              <User size={16} className="me-2" /> Full Name
            </label>
           
            <p className="form-control bg-light">Rahul</p>
          </div>
          <div className="mb-3">
            <label className="form-label fw-medium">
              <Mail size={16} className="me-2" /> Email
            </label>
            
            <p className="form-control bg-light">Rahul@gmail.com</p>

          </div>
        </div>

        {/* Account Information */}
        <div className="bg-light p-3 rounded">
          <h5 className="fw-medium">Account Information</h5>
          <div className="d-flex justify-content-between border-bottom py-2">
            <span>Member since</span>
            <span>{authUser?.createdAt?.split("T")[0] || 'N/A'}</span>
          </div>
          <div className="d-flex justify-content-between py-2">
            <span>Account Status</span>
            <span className="text-success">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
