import React, { useContext, useState } from "react";
import Axios from "axios";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import ErrorNotice from "../misc/ErrorNotice";
const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { email, password, passwordCheck, displayName };
      await Axios.post("http://localhost:5000/users/register", newUser);
      const loginRes = await Axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      console.log(loginRes);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/sandbox");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="page">
      <div>Register</div>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={submit}>
        <h2>Email</h2>
        <input
          id="register-email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label>Passwords</label>
        <input
          id="register-password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Verify password"
          onChange={(e) => {
            setPasswordCheck(e.target.value);
          }}
        />

        <label htmlFor="register-display-name">Display Name</label>
        <input
          id="register-display-name"
          type="text"
          onChange={(e) => {
            setDisplayName(e.target.value);
          }}
        />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
