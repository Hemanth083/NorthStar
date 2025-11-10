// src/components/LoginSignup.jsx
import React, { useState } from "react";
import './LoginSignup.css'

const LoginSignup = ({ onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const url = isLogin 
    ? "http://localhost:5000/api/auth/login" 
    : "http://localhost:5000/api/auth/signup";
      // Only send names when signing up
    const payload = isLogin
      ? { email: form.email, password: form.password }
      : { firstName: form.firstName, lastName: form.lastName, email: form.email, password: form.password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message || "Something went wrong");
      } else {
        setMessage(data.message || (isLogin ? "Login successful" : "Signup successful"));
        // on successful login, backend returns user object (we used that pattern earlier)
        if (isLogin && data.user) {
          // store user in localStorage (simple)
          localStorage.setItem("user", JSON.stringify(data.user));
          onLoginSuccess && onLoginSuccess(data.user);
          // close modal
          onClose();
        }
        // after signup, you may want to auto-login or ask user to login; here we switch to login
        if (!isLogin) {
          setIsLogin(true);
          // clear password
          setForm(prev => ({ ...prev, password: "" }));
        }
      }
    } catch (err) {
      setMessage("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        <form onSubmit={submit}>
          {!isLogin && (
            <>
              <input
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <input
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </>
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            minLength={6}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Please wait..." : (isLogin ? "Login" : "Sign Up")}
          </button>
        </form>

        {message && <p className="modal-message">{message}</p>}

        <p style={{ marginTop: 12 }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            style={{ color: "blue", cursor: "pointer", marginLeft: 6 }}
            onClick={() => { setIsLogin(!isLogin); setMessage(null); }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
