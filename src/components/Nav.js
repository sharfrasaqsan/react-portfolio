import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Nav = () => {
  const { user } = useAuth();

  return (
    <nav>
      <h1>Mohamed Sharfiras</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/project/create-project">CreateProject</Link>
        </li>
        <li>
          <Link to="/admin">Admin Panel</Link>
        </li>
        {user ? null : (
          <li>
            <Link to="/login">Admin Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
