import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { MenuContainer } from "./menu-styles";
import { AuthContext } from "../../shared-components/context/auth-context";
// import { useAuth } from "../../shared-components/hooks/auth-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCrown } from "@fortawesome/free-solid-svg-icons";

const AuthOptions = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  console.log("authContext AuthOptions menu", authContext);

  const register = () => {
    history.push("/auth");
  };

  const login = () => {
    history.push("/auth");
  };

  const goToAdmin = () => {
    history.push("/admin-page");
  };

  return (
    <MenuContainer>
      <Link to="/">
        <h1>@mattattheworld</h1>
      </Link>
      <nav>
        {authContext.token ? (
          <>
            <FontAwesomeIcon
              icon={faCrown}
              color="#E75B26"
              onClick={goToAdmin}
            />
            {/* <button onClick={goToAdmin}>Admin</button> */}
            <button onClick={authContext.logout}>Log Out</button>
          </>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faCrown}
              color="#E75B26"
              onClick={goToAdmin}
            />
            {/* <button onClick={register}>Sign Up</button>
            <button onClick={login}>Log In</button> */}
          </>
        )}
      </nav>
    </MenuContainer>
  );
};

export default AuthOptions;
