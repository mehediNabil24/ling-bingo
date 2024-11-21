import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

const ProfileUpdated = () => {
  const { updatedUserProfile, user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Initialize state with current user information
//   const [name, setName] = useState(user?.displayName || '');
//   const [photoURL, setPhotoURL] = useState(user?.photoURL || '');



  // Handle profile update
  const handleUpdatedProfile = (e) => {
    e.preventDefault();
    const name= e.target.name.value;
    const photo= e.target.photo.value;

    updatedUserProfile({ displayName: name, photoURL:photo })
      .then(() => {
        // Update the user context with new information
        setUser({ ...user, displayName: name, photoURL:photo });
        alert('Profile updated successfully!');
        navigate('/my-profile'); // Navigate back to the "my-profile" route
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        alert('Failed to update profile.');
      });
  };

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h2 className="text-2xl font-semibold pb-4 text-center">Update Your Profile</h2>
      <div className="card bg-base-100 w-full max-w-lg shadow-lg">
        <form onSubmit={handleUpdatedProfile} className="card-body space-y-4">
          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name='name'
              placeholder="Enter your name"
              className="input input-bordered"
              
            //   onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered"
              name='photo'
              
            //   onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </div>

          {/* Update Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-neutral">
              Update Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdated;
