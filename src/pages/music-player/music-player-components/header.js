import React, { useContext } from "react";
import { HeaderContainer } from "../music-player-styles";

import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

import UserContext from "../music-player-context/user-context";

const Header = () => {
  console.log("---Header Rendered---");
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData);

  return (
    <HeaderContainer>
      <div className="headerLeft">
        {/* <Search /> */}
        <input placeholder="Search for Artists, Songs, or Albums" type="text" />
      </div>
      <div className="headerRight">
        <Avatar
          src={userData.user?.images[0]?.url}
          alt={userData.user.display_name}
        />
        <h4>{userData.user.display_name}</h4>
      </div>
    </HeaderContainer>
  );
};

export default Header;
