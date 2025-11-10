// src/components/NavagationBar.jsx
import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";
import userIcon from "../assets/user.svg";
import shopping from "../assets/shopping.svg";
import React, { useEffect, useState } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import LoginSignup from "./LoginSignup";

const NavagationBar = () => {
  const cart = useSelector((state) => state.cart);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // read logged user from localStorage on mount
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <div className="navagationBar">
        <div>
          {/* <p className="heading">NorthStar</p> */}
        </div>

        <div className="toNextPage">
          <Link className="links" to="/">Home</Link>
          <Link className="links" to="/about">About</Link>
          <Link className="links" to="/contact">Contact</Link>
        </div>

        <div className="link">
          {user ? (
            <>
              <span style={{ marginRight: 8, color: "#fff" }}>Hi, {user.firstName}</span>
              <button onClick={handleLogout} style={{ background: "transparent", color: "#fff", border: "1px solid #fff", padding: "6px 8px", borderRadius: 6, cursor: "pointer" }}>
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => setShowLogin(true)} style={{ background: "transparent", border: "none", cursor: "pointer" }}>
              <img alt="user" src={userIcon} />
            </button>
          )}

          <Link className="cart" to="/cart">
            <img alt="cart" src={shopping} />
            <span className="count-of-items">{cart.length}</span>
          </Link>

          <Link><img alt="menu" src={menu} /></Link>
        </div>
      </div>

      {showLogin && (
        <LoginSignup
          onClose={() => setShowLogin(false)}
          onLoginSuccess={(u) => setUser(u)}
        />
      )}
    </>
  );
};

export default NavagationBar;
