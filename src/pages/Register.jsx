import {useNavigate} from 'react-router-dom';
import {useState, useContext} from 'react';
import {register} from '../API';
import AuthContext from '../contexts/AuthContext';

export default function Register() {
  const {setToken} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const {first_name, last_name, password, email} = formData;

  function handleOnChange(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await register(formData);
    if (result.user) {
      
     setToken(result.token);
      navigate('/profile');
    }
  }

  return (
    <div className=' mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-5 border rounded'>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor='first_name'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            First Name
          </label>
          <div className='mt-2'>
            <input
              id='first_name'
              name='first_name'
              type='text'
              value={first_name}
              onChange={handleOnChange}
              className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='last_name'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Last Name
          </label>
          <div className='mt-2'>
            <input
              id='last_name'
              name='last_name'
              value={last_name}
              onChange={handleOnChange}
              type='text'
              className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

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