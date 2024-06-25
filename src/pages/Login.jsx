import {useNavigate} from 'react-router-dom';
import {useState, useContext} from 'react';
import {login} from '../API';
import AuthContext from '../context/AuthContext';
function Login() {
  const {setToken} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {email, password} = formData;
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault(event);
    const result = await login(formData);
    if (result.token) {
      setToken(result.token);
      navigate('/profile');
    }
  }

  function handleOnChange(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className=' mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-5 border rounded'>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Email address
          </label>
          <div className='mt-2'>
            <input
              id='email'
              name='email'
              type='email'
              value={email}
              onChange={handleOnChange}
              required
              className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='password'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Password
          </label>
        </div>
        <div className='mt-2'>
          <input
            id='password'
            name='password'
            type='password'
            value={password}
            onChange={handleOnChange}
            className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
        <div className='mt-2'>
          <button
            type='submit'
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;