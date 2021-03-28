import React from "react";
import { ProfileSectionContainer } from "./section-one-styles";
import ProfilePic from "../home-page-assets/profilepic@3x.png";
import Button from "../../../shared-components/form-elements/button";
import NamePlate from "./name-plate";

const ProfileSection = () => {
  return (
    <ProfileSectionContainer>
      <div className="row">
        <div className="profile-background">
          <img src={ProfilePic} alt="ProfilePic" />
        </div>
      </div>
      <div className="row">
        <NamePlate />
      </div>
      <div className="row">
        <Button inverse>Contact Me</Button>
      </div>
    </ProfileSectionContainer>
  );
};

export default ProfileSection;
