import React, { useContext } from "react";
import { SidebarContainer } from "../music-player-styles";
import SidebarOption from "./sidebar-option";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { LibraryMusic } from "@material-ui/icons";
import UserContext from "../music-player-context/user-context";

const Sidebar = () => {
  console.log("---Sidebar Rendered---");

  const { userData } = useContext(UserContext);

  console.log(JSON.stringify(userData));

  return (
    <SidebarContainer>
      <img
        className="sidebarLogo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusic} />
      <br />
      <strong className="sidebarTitle">PLAYLISTS</strong>
      <hr />
      {userData.userPlaylists.items.map((item) => (
        <SidebarOption title={item.name} key={item.id} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
