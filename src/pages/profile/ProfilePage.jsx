import React, { useState } from 'react';
import MainLayout from '../../components/MainLayout';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: '[email]',
    phone: '+1234567890',
    dateOfBirth: '1990-01-01',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditingPassword && formData.newPassword !== formData.confirmNewPassword) {
      alert('New passwords do not match!');
      return;
    }
    // Handle profile update logic here
    console.log('Profile update data:', formData);
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Profile Settings
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#5a7184] font-semibold block mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
                required
              />
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5a7184] font-semibold block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
                required
              />
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="phone"
                className="text-[#5a7184] font-semibold block mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
                required
              />
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="dateOfBirth"
                className="text-[#5a7184] font-semibold block mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
                required
              />
            </div>

            <div className="border-t border-[#c3cad9] pt-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-dark-hard font-semibold text-lg">
                  Change Password
                </h2>
                <button
                  type="button"
                  onClick={() => setIsEditingPassword(!isEditingPassword)}
                  className="text-primary text-sm hover:underline"
                >
                  {isEditingPassword ? 'Cancel' : 'Edit'}
                </button>
              </div>

              {isEditingPassword && (
                <>
                  <div className="flex flex-col mb-6 w-full">
                    <label
                      htmlFor="currentPassword"
                      className="text-[#5a7184] font-semibold block mb-2"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      placeholder="Enter current password"
                      className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
                      required={isEditingPassword}
                    />
                  </div>
                  <div className="flex flex-col mb-6 w-full">
                    <label
                      htmlFor="newPassword"
                      className="text-[#5a7184] font-semibold block mb-2"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      placeholder="Enter new password"
                      className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
                      required={isEditingPassword}
                    />
                  </div>
                  <div className="flex flex-col mb-6 w-full">
                    <label
                      htmlFor="confirmNewPassword"
                      className="text-[#5a7184] font-semibold block mb-2"
                    >
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirmNewPassword"
                      name="confirmNewPassword"
                      value={formData.confirmNewPassword}
                      onChange={handleChange}
                      placeholder="Confirm new password"
                      className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
                      required={isEditingPassword}
                    />
                  </div>
                </>
              )}
            </div>

            <button
              type="submit"
              className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Update Profile
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;
