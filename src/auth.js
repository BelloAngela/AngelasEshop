import { apiLogin } from '../utils/api.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await apiLogin(email, password);
      if (response.success) {
        // Handle successful login (e.g., redirect to dashboard)
        window.location.href = '/dashboard.html';
      } else {
        document.getElementById('error-message').innerText = response.message;
      }
    } catch (error) {
      document.getElementById('error-message').innerText = 'An error occurred. Please try again.';
    }
  });
});
