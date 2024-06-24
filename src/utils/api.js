export async function apiLogin(email, password) {
    // Simulating an API call
    const fakeDatabase = {
      email: 'user@example.com',
      password: 'password123',
    };
  
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === fakeDatabase.email && password === fakeDatabase.password) {
          resolve({ success: true, message: 'Login successful' });
        } else {
          resolve({ success: false, message: 'Invalid email or password' });
        }
      }, 1000);
    });
  }
  