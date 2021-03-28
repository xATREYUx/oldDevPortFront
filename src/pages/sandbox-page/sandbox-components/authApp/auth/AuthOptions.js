import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";

const AuthOptions = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const register = () => {
    history.push("/sandbox/register");
  };

  const login = () => {
    history.push("/sandbox/login");
  };

  const logout = () => {
    setUserData({ token: undefined, user: undefined });
    localStorage.setItem("auth-token", "");
  };
  return (
    <nav className="auth-options">
      {userData.user ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <>
          <button id="register" onClick={register}>
            Register
          </button>
          <button id="logIn" onClick={login}>
            Log In
          </button>
        </>
      )}
    </nav>
  );
};

export default AuthOptions;
