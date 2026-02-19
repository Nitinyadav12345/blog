const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';

// Generic API request handler
const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw {
        status: response.status,
        message: data.message || data.detail || Object.values(data).flat().join(', ') || 'Request failed',
        data
      };
    }

    return { success: true, data };
  } catch (error) {
    if (error.status) {
      return { success: false, error: error.message, status: error.status };
    }
    return { success: false, error: 'Network error. Please check if the server is running.' };
  }
};

// Auth API
export const authAPI = {
  login: async (credentials) => {
    return await apiRequest('/auth/login/', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  register: async (userData) => {
    return await apiRequest('/auth/register/', {
      method: 'POST',
      body: JSON.stringify({
        name: userData.name,
        username: userData.username,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
        date_of_birth: userData.dateOfBirth,
      }),
    });
  },

  logout: async () => {
    return await apiRequest('/auth/logout/', {
      method: 'POST',
    });
  },

  getCurrentUser: async () => {
    return await apiRequest('/auth/user/', {
      method: 'GET',
    });
  },
};

// User API
export const userAPI = {
  getProfile: async () => {
    return await apiRequest('/user/profile/', {
      method: 'GET',
    });
  },

  updateProfile: async (profileData) => {
    return await apiRequest('/user/profile/', {
      method: 'PUT',
      body: JSON.stringify({
        name: profileData.name,
        email: profileData.email,
        phone: profileData.phone,
        date_of_birth: profileData.dateOfBirth,
      }),
    });
  },

  changePassword: async (passwordData) => {
    return await apiRequest('/user/change-password/', {
      method: 'POST',
      body: JSON.stringify({
        current_password: passwordData.currentPassword,
        new_password: passwordData.newPassword,
      }),
    });
  },
};

export default { authAPI, userAPI };
