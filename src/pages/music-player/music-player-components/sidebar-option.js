import React from "react";

import { SidebarOptionContainer } from "../music-player-styles";

const SidebarOption = ({ title, Icon }) => {
  return (
    <SidebarOptionContainer>
      {Icon && <Icon classname="sidbarOptionIcon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;
