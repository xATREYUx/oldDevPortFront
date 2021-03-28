import React from "react";
import { SongRowContainer } from "../music-player-styles";

const SongRow = ({ track }) => {
  return (
    <SongRowContainer>
      <img src={track.album.images[0].url} alt="" className="songRowAlbum" />
      <div className="songRowInfo">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </SongRowContainer>
  );
};

export default SongRow;
