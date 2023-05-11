import { useContext } from 'react';
import { UserContext } from './UserContext';
import "./Header.css";

function Header() {
  const { user, isAdmin, setUserContext } = useContext(UserContext);

  const handleCheckboxChange = () => {
    setUserContext({ role: isAdmin ? 'korisnik' : 'admin' });
  };

  return (
    <header>
      <div>
        <label htmlFor="admin">Admin</label>
        <input
          type="checkbox"
          id="admin"
          checked={isAdmin}
          onChange={handleCheckboxChange}
        />
      </div>
      
    </header>
  );
}
export default Header;