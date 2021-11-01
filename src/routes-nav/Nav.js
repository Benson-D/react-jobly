import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import UserContext from "../UserContext";

/** Renders Nav bar for app.
 *
 * When not signed in shows signup and login forms.
 * When logged in shows the main links to site.
 *
 * State: none
 * Props: none
 *
 * App -> Nav
 */

function Nav({ logOut }) {
  const { currUser } = useContext(UserContext);
  return (
    <nav className="Nav navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Jobly
        </Link>
        {currUser !== null ? (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/companies">
                Companies
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/" onClick={logOut}>
                Log out {currUser.username}
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Nav;
