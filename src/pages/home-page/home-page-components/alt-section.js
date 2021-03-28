import React from "react";
import { AltSectionContainer } from "./section-one-styles";

import ProfileSection from "./profile-section";
// import NamePlate from "./name-plate";

const AltSection = () => {
  return (
    <AltSectionContainer>
      <div className="alt-section">
        <ProfileSection />
      </div>
    </AltSectionContainer>
  );
};
export default AltSection;
