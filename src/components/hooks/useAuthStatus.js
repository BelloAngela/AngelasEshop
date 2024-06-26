import {useState, useEffect, useContext} from 'react';
import AuthContext from '../../contexts/AuthContext';

export function useAuthStatus() {
  const {token} = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    setCheckingStatus(false);
  }, [token]);

  return {loggedIn, checkingStatus, token};
}