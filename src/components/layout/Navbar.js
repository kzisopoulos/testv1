import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <div className="navbar__logo-wrapper">
          <Link to="/">
            <img src={logo} alt="app logo" className="navbar__logo-image" />
          </Link>
        </div>
        <div className="navbar__logo-text">
          <div>yummyburgers.</div>{" "}
          <span className="navbar__logo-subtitle">finger-licking-good</span>{" "}
        </div>
      </div>

      <ul className="navbar__links">
        {user && (
          <li>
            <button className="btn" onClick={logout}>
              Logout
            </button>
          </li>
        )}
        {!user && (
          <li>
            <Link to="/login" className="navbar__links-link">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
