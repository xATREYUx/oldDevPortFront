import React, { useEffect, useState, useContext } from "react";

import Player from "../music-player/music-player-components/player";
import Login from "./music-player-components/login";

import UserContext from "./music-player-context/user-context";

const Home = () => {
  const { userData } = useContext(UserContext);
  console.log("---Home Rendered---", userData);

  return userData.user ? (
    // <h1>Welcome {userData.user.display_name}</h1>
    <Player />
  ) : (
    <>
      <Login />
    </>
  );
};

export default Home;
