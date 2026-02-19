class User {
  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.username = data.username || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.dateOfBirth = data.date_of_birth || data.dateOfBirth || '';
    this.registrationDate = data.registration_date || data.registrationDate || '';
    this.lastLogin = data.last_login || data.lastLogin || '';
  }

  // Check if user is authenticated
  static isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  // Get current user from localStorage
  static getCurrentUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const userData = JSON.parse(userStr);
        return new User(userData);
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  // Save user to localStorage
  static saveUser(userData) {
    const user = new User(userData);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }

  // Clear user data (logout)
  static clearUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // Get token
  static getToken() {
    return localStorage.getItem('token');
  }

  // Save token
  static saveToken(token) {
    localStorage.setItem('token', token);
  }

  // Convert to plain object
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      username: this.username,
      email: this.email,
      phone: this.phone,
      date_of_birth: this.dateOfBirth,
      registration_date: this.registrationDate,
      last_login: this.lastLogin,
    };
  }

  // Get display name
  getDisplayName() {
    return this.name || this.username || this.email.split('@')[0];
  }

  // Get formatted date of birth
  getFormattedDateOfBirth() {
    if (!this.dateOfBirth) return '';
    const date = new Date(this.dateOfBirth);
    return date.toLocaleDateString();
  }

  // Get formatted registration date
  getFormattedRegistrationDate() {
    if (!this.registrationDate) return '';
    const date = new Date(this.registrationDate);
    return date.toLocaleDateString();
  }

  // Get formatted last login
  getFormattedLastLogin() {
    if (!this.lastLogin) return '';
    const date = new Date(this.lastLogin);
    return date.toLocaleString();
  }
}

export default User;
