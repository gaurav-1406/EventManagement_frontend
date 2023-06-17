import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if email and password match admin or user credentials
    if (email === "admin@gmail.com" && password === "admin") {
      setIsAdmin(true);
      setLoggedIn(true);
    } else if (email === "user@gmail.com" && password === "user") {
      setLoggedIn(true);
    } else if (email === "user1@gmail.com" && password === "user1") {
      setLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  if (loggedIn) {
    navigate(isAdmin ? "/admin" : "/user");
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
