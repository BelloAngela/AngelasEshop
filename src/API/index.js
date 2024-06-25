const BASEURL = 'https://fakestoreapi.com';

export async function register(userData) {
  try {
    const response = await fetch(`${BASEURL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: userData.first_name,
        lastname: userData.last_name,
        email: userData.email,
        password: userData.password,
      }),
    });
    const result = await response.json();
    if (result.token) {
      localStorage.setItem('token', JSON.stringify(result.token));
      return result;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getMe(token) {
  if (!token) return;
  try {
    const response = await fetch(`${BASEURL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    if (result.id) {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function login(userData) {
  try {
    const response = await fetch(`${BASEURL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    });
    const result = await response.json();
    if (result.token) {
      localStorage.setItem('token', JSON.stringify(result.token));
      return result;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProducts() {
  try {
    const response = await fetch(`${BASEURL}/products`);
    const result = await response.json();
    if (result.products) {
      return result.products;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getSingleProduct(id) {
  try {
    const response = await fetch(`${BASEURL}/products/${id}`);
    const result = await response.json();
    return result.products;
  } catch (error) {
    console.log(error);
  }
}

