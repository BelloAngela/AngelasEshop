import './css/tailwind.css';
import './js/auth.js';

document.getElementById('root').innerHTML = `
  ${require('./components/login-form.html')}
`;
