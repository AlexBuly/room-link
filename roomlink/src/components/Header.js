import { Link, useNavigate } from 'react-router-dom';

const Header = ({ loggedIn, handleLogout }) => {
  const navigate = useNavigate();

  const logout = () => {
    handleLogout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link to="/Home" className="nav-logo">RoomLink</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/Home" className="nav-link">Home</Link>
          </li>
          {loggedIn ? (
            <li className="nav-item">
              <button onClick={logout} className="nav-link">Logout</button>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/Login" className="nav-link">Log in</Link>
              </li>
              <li className="nav-item">
                <Link to="/SignUp" className="nav-link">Create Account</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
