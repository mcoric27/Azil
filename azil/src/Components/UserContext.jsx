import { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext({
  user: { role: 'korisnik' },
  isAdmin: false,
  setUserContext: () => {},
});

function UserProvider({ children }) {
  const [user, setUser] = useState({ role: 'korisnik' });
  const [isAdmin, setIsAdmin] = useState(false);

  function setUserContext(newUser) {
    setUser({ ...user, ...newUser });
  }

  useEffect(() => {
    setIsAdmin(user.role === 'admin');
  }, [user.role]);

  return (
    <UserContext.Provider value={{ user, isAdmin, setUserContext }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const { user, isAdmin, setUserContext } = useContext(UserContext);
  return { user, isAdmin, setUserContext };
}

export { UserContext, UserProvider, useUser };
