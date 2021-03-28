import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home";
import Login from "./music-player-components/login";
import SpotifyWebApi from "spotify-web-api-js";

import UserContext from "./music-player-context/user-context";
import { MusicAppContainer } from "./music-player-styles";
const queryString = require("query-string");

const spotify = new SpotifyWebApi();

const MusicPlayer = ({ location }) => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    userPlaylists: undefined,
    discoverWeekly: undefined,
  });

  useEffect(() => {
    console.log("---useEffect---");
    console.log("home useeffect userdata", userData);
    const parsedHash = queryString.parse(location.hash);
    window.location.hash = "";
    let token = parsedHash.access_token;
    console.log("token on load", token);
    if (token) {
      const handleAuth = async () => {
        console.log("---handleAuth---");
        await spotify.setAccessToken(token);
        let user = await spotify.getMe();
        console.log("user", user);
        let userPlaylists = await spotify.getUserPlaylists("mwmailing");
        let discoverWeekly = await spotify.getPlaylist(
          "4VmQSqDh2wWHKIvXQ20mRC?si"
        );
        setUserData({ token, user, userPlaylists, discoverWeekly });
      };
      handleAuth();
    }
  }, []);

  return (
    <MusicAppContainer>
      <>
        <BrowserRouter>
          <UserContext.Provider value={{ userData, setUserData }}>
            <div>
              <Switch>
                <Route exact path="/music-player" component={Home} />
                <Route path="/music-player/login" component={Login} />
              </Switch>
            </div>
          </UserContext.Provider>
        </BrowserRouter>
      </>
    </MusicAppContainer>
  );
};

export default MusicPlayer;
