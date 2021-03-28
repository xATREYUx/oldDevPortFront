import React, { useState, useContext, useEffect, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import PostPage from "./pages/post-page/post-page";
import Sandbox from "./pages/sandbox-page/sandbox-page";
import AdminPage from "./pages/admin-page/admin-page";
import Menu from "./shared-components/menu/menu";
import MusicPlayer from "./pages/music-player/music-player";
import Auth from "./pages/auth/auth-page";
import { useAuth } from "./shared-components/hooks/auth-hook";
import { AuthContext } from "./shared-components/context/auth-context";
import { AppContainer } from "./app.styles";

let routes;

const App = () => {
  const authContext = useContext(AuthContext);
  const { token, login, logout, userId, userPosts } = useAuth();

  // const [authContext, setAuthContext] = useState({
  //   isLoggedIn: !!token,
  //   token: token,
  //   userId: userId,
  //   login: login,
  //   logout: logout,
  // });

  // const providerValue = useMemo(() => ({ authContext, setAuthContext }), [
  //   authContext,
  //   setAuthContext,
  // ]);

  // const { authContext, setAuthContext } = useContext(AuthContext);
  // // const auth = useContext(AuthContext);

  // console.log("authContext", authContext);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log("authContext mapp page", authContext);

  if (token || authContext.token !== null) {
    console.log("authContext map page token", token);
    console.log("authContext map page auth.token", authContext.token);
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/posts/:pid" exact>
          <PostPage />
        </Route>
        <Route path="/sandbox">
          <Sandbox />
        </Route>
        <Route path="/admin-page">
          <AdminPage />
        </Route>
        {/* <Route path="/:userId/posts">
          <AdminPage />
        </Route> */}
        <Route path="/music-player">
          <MusicPlayer />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    console.log("authContext mapp page !token", token);
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/sandbox">
          <Sandbox />
        </Route>
        <Route path="/posts/:pid" exact>
          <PostPage />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
        userPosts: userPosts,
      }}
    >
      <Router>
        <AppContainer>
          <Menu />
          <main>{routes}</main>
        </AppContainer>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
