import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

// Link는 Router 밖에서 사용할 수 없다
function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
