import React from "react";
import { PlayerContainer } from "../music-player-styles";

import Sidebar from "./sidebar";
import Body from "./body";
import Footer from "./footer";

// import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <PlayerContainer>
      <div className="playerBody">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </PlayerContainer>
  );
}

export default Player;
