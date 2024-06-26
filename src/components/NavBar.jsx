import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {useAuthStatus} from './hooks/useAuthStatus';
import AuthContext from '../contexts/AuthContext';
function NavBar() {
  const {setToken} = useContext(AuthContext);
  const {loggedIn} = useAuthStatus();

  async function handleClick() {
    await localStorage.removeItem('token');
    setToken(null);
  }

  return (
    <div className='flex flex-col justify-center bg-gray-100 '>
      <div className='flex justify-between items-center px-20 py-5'>
        <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>
          Shop
        </h1>

        <div className='flex justify-between gap-1  '>
          <Link
            to='/profile'
            className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
          >
            Profile
          </Link>
          {loggedIn ? (
            <button
              onClick={handleClick}
              className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to='/register'
                className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
              >
                Register
              </Link>
              <Link
                to='/login'
                className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;