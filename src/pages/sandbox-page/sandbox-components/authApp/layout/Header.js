import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";

const Header = () => {
  return (
    <div id="header">
      <Link to="/">
        <h1 className="title">authApp</h1>
      </Link>
      <AuthOptions />
    </div>
  );
};

export default Header;
