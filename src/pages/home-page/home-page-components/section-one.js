import React from "react";

import PostsSection from "./posts-section";
import {
  SectionContainer,
  Title,
  AboutMeContainer,
} from "./section-one-styles";
import { ReactComponent as BackgroundBlob } from "../home-page-assets/backgroundBlob.svg";
import { ReactComponent as BlobTop } from "../../../theme-assets/images/blobTop.svg";
import { AnimationCoupleSitting } from "../home-page-components/animation-block";
import AltSection from "./alt-section";
import {
  AnimationLookDown,
  AnimationFreeFall,
} from "../home-page-components/animation-block";

const SectionOne = (props) => {
  console.log("allPosts section-one", props);
  return (
    <SectionContainer>
      <BlobTop className="backBlobTop" />
      <AnimationCoupleSitting />
      <div className="section-column column-left">
        {/* <NamePlate /> */}
        <Title>React Engineering</Title>
        <PostsSection posts={props.posts} />
      </div>
      <div className="section-column column-right">
        {/* <ProfileSection /> */}
        <AltSection />

        <AnimationLookDown />
        <AnimationFreeFall />
        <AboutMeContainer className="aboutMeContiner">
          <div className="aboutMeText">
            Code is salvation. Supercharging processes with tech is fun. Red
            pill, all day. Redux rocks. Teach script to kids. I got components
            for days. StackOverflow amazes me. I like them styled with Sass.
            More beeps and boops. Keep renders down. Make javascript your b****.
            Captain Archer is the best starship Captain; change my mind. I could
            have loved Cary Grant. Data, Data, Data. If google can’t answer your
            question, you’re asking the wrong one. Must learn more Python. "The
            jungian thing." It’s only logical. K. I. S. S. Dare to dream. Covid
            sucks. Dark mode 24/7. The Rock for President. Birds & squirrels,
            home runs & touchdowns. Thrive, don’t survive. Port in, zone out.
            Cable guys don’t know what a packet is. I scream love and punk rock
            at the sky. There are levels to this game.
          </div>
        </AboutMeContainer>
      </div>
      {/* <BlobTop className="backBlobBottom" /> */}
    </SectionContainer>
  );
};

export default SectionOne;
