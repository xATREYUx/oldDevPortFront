import React, { useContext } from "react";
import { PlayerBodyContainer } from "../music-player-styles";

import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";

import Header from "./header";
import SongRow from "./song-row";
import UserContext from "../music-player-context/user-context";

const Body = () => {
  const { userData } = useContext(UserContext);

  return (
    <PlayerBodyContainer>
      <Header />

      <div className="body__info">
        <img src={userData.discoverWeekly.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{userData.discoverWeekly.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {userData.discoverWeekly.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </PlayerBodyContainer>
  );
};

export default Body;
