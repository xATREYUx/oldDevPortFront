import React, { useState, useEffect } from "react";
import { MusicAppContainer } from "./music-player-styles";

import Login from "./music-player-components/login";
import Home from "./home";
import UserContext from "./music-player-context/user-context";
const queryString = require("query-string");

const MusicPlayer = ({ location }) => {
  console.log("---MusicPlayer Rendered---");

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    userPlaylists: undefined,
    discoverWeekly: undefined,
  });

  useEffect(() => {
    const parsedHash = queryString.parse(location.hash);
    window.location.hash = "";
    let token = parsedHash.access_token;
    console.log(token);
    setUserData({ token: token });
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <MusicAppContainer>
        {userData.token ? <Home /> : <Login location={location} />}
      </MusicAppContainer>
    </UserContext.Provider>
  );
};

export default MusicPlayer;
