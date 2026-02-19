import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import { authAPI } from '../../services/api';
import User from '../../models/model';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
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
    setLoading(true);
    setError('');

    const result = await authAPI.login(formData);

    if (result.success) {
      // Store token and user data
      const token = result.data.token || result.data.access;
      const userData = result.data.user || result.data;
      
      User.saveToken(token);
      User.saveUser(userData);
      
      // Redirect to home
      navigate('/');
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Sign In
          </h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="username"
                className="text-[#5a7184] font-semibold block mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
                required
                disabled={loading}
              />
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="text-[#5a7184] font-semibold block mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
                required
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg mb-6 hover:bg-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
            <p className="text-sm font-semibold text-[#5a7184] text-center">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary hover:underline">
                Register now
              </Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default LoginPage;
