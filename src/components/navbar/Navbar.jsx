import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  let navigate = useNavigate();
  function navigation() {
    navigate('/');
  }

  const { loading, error, dispatch } = useContext(AuthContext);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigation();
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">MyBooking</span>
        </Link>
        {user ? (<div className="right_side"><div className="username">{user.username}</div><div className="logout"><button className="navButton" onClick={logoutHandler}>Logout</button></div></div>) : (
          <div className="navItems">
            <Link to="/register"><button className="navButton">Register</button></Link>
            <Link to="/login"><button className="navButton">Login</button></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;