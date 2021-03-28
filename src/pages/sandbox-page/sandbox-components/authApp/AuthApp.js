import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import UserContext from "./context/UserContext";
import axios from "axios";
import "./styles.authApp.css";
import Axios from "axios";
import { AuthAppContainer } from "./authApp.styles";

const AuthApp = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "http://localhost:5000/users/tokenisvalid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);
  return (
    <AuthAppContainer>
      <>
        <BrowserRouter>
          <UserContext.Provider value={{ userData, setUserData }}>
            <Header />
            <div
              className="container"
              style={{
                borderRadius: "0 0 15px 15px",
              }}
            >
              <Switch>
                <Route exact path="/sandbox" component={Home} />
                <Route path="/sandbox/login" component={Login} />
                <Route path="/sandbox/register" component={Register} />
              </Switch>
            </div>
          </UserContext.Provider>
        </BrowserRouter>
      </>
    </AuthAppContainer>
  );
};

export default AuthApp;
