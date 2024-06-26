import {useState, useEffect} from 'react';
import {getMe} from '../API';

import {useAuthStatus} from '../components/hooks/useAuthStatus';
import Spinner from '../components/Spinner';

export default function Profile() {
  const [user, setUser] = useState(null);
  const {token} = useAuthStatus();

  useEffect(() => {
    (async function () {
      const loggedUser = await getMe(token);
      setUser(loggedUser);
    })();
  }, [token]);

  return (
    <>
      <h1>Profile</h1>
      <div>{user && user.firstname}</div>
      <div>{user && user.email}</div>
      {user?.books &&
        user.books.map((book) => {
          return <h1 key={book.id}>{book.title}</h1>;
        })}
    </>
  );
}