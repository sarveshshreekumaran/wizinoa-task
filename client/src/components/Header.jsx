import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "pink",
        padding: "16px",
      }}
    >
      <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/userdetails">User Info</Link>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="login">Login</Link>
        <Link to="/file_upload">File Upload</Link>
      </nav>
    </header>
  );
}

export default Header;
