import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import { FiUser, FiMail, FiLock, FiCalendar, FiCheckCircle, FiPhone } from 'react-icons/fi';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone:'',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          username: formData.username,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          date_of_birth: formData.dateOfBirth
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Registration successful, redirect to login
        navigate('/login', { state: { message: 'Registration successful! Please login.' } });
      } else {
        setError(data.message || data.detail || Object.values(data).flat().join(', ') || 'Registration failed.');
      }
    } catch (err) {
      setError('Network error. Please check if the server is running.');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Welcome Section */}
            <div className="hidden md:flex flex-col justify-center space-y-6 p-8">
              <div className="space-y-4">
                <h1 className="font-roboto text-5xl font-bold text-dark-hard leading-tight">
                  Join Our
                  <span className="text-primary"> Community</span>
                </h1>
                <p className="text-dark-light text-lg leading-relaxed">
                  Create an account and unlock access to exclusive articles, personalized content, and connect with writers worldwide.
                </p>
              </div>
              
              <div className="space-y-4 pt-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FiCheckCircle className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-hard mb-1">Access Premium Content</h3>
                    <p className="text-dark-light text-sm">Read unlimited articles and exclusive stories</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FiCheckCircle className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-hard mb-1">Personalized Experience</h3>
                    <p className="text-dark-light text-sm">Get recommendations based on your interests</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FiCheckCircle className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-hard mb-1">Connect & Share</h3>
                    <p className="text-dark-light text-sm">Engage with authors and fellow readers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form Section */}
            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
                <div className="text-center mb-8">
                  <h2 className="font-roboto text-3xl font-bold text-dark-hard mb-2">
                    Create Account
                  </h2>
                  <p className="text-dark-light">Fill in your details to get started</p>
                </div>

                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="text-dark-soft font-semibold block mb-2 text-sm"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-light" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#e5e7eb] focus:border-primary outline-none transition-all duration-300 text-dark-hard placeholder:text-[#959ead]"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Username Input */}
                  <div className="relative">
                    <label
                      htmlFor="username"
                      className="text-dark-soft font-semibold block mb-2 text-sm"
                    >
                      Username
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-light" />
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="johndoe"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#e5e7eb] focus:border-primary outline-none transition-all duration-300 text-dark-hard placeholder:text-[#959ead]"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-dark-soft font-semibold block mb-2 text-sm"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-light" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="[email]"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#e5e7eb] focus:border-primary outline-none transition-all duration-300 text-dark-hard placeholder:text-[#959ead]"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="text-dark-soft font-semibold block mb-2 text-sm"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-light" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1234567890"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#e5e7eb] focus:border-primary outline-none transition-all duration-300 text-dark-hard placeholder:text-[#959ead]"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Date of Birth Input */}
                  <div className="relative">
                    <label
                      htmlFor="dateOfBirth"
                      className="text-dark-soft font-semibold block mb-2 text-sm"
                    >
                      Date of Birth
                    </label>
                    <div className="relative">
                      <FiCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-light" />
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#e5e7eb] focus:border-primary outline-none transition-all duration-300 text-dark-hard"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Password Inputs Grid */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <label
                        htmlFor="password"
                        className="text-dark-soft font-semibold block mb-2 text-sm"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-light" />
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="••••••••"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#e5e7eb] focus:border-primary outline-none transition-all duration-300 text-dark-hard placeholder:text-[#959ead]"
                          required
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="confirmPassword"
                        className="text-dark-soft font-semibold block mb-2 text-sm"
                      >
                        Confirm Password
                      </label>
                      <div className="relative">
                        <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-light" />
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="••••••••"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#e5e7eb] focus:border-primary outline-none transition-all duration-300 text-dark-hard placeholder:text-[#959ead]"
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </button>

                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-dark-light">Already have an account?</span>
                    </div>
                  </div>

                  {/* Login Link */}
                  <Link
                    to="/login"
                    className="block w-full text-center border-2 border-primary text-primary font-semibold py-3.5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Sign In Instead
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegisterPage;
