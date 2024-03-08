import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar1 = () => {
  const isToken = localStorage.getItem("token") ? true : false;
  console.log(localStorage.getItem("token"));
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">BGryt</NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              {isToken && (
                <li>
                  <NavLink to="/service">Service</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
