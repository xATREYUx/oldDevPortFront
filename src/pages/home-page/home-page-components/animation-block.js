import React from "react";
import {
  AnimationLookDownContainer,
  AnimationFreeFallContainer,
  AnimationCoupleSittingContainer,
} from "./animation-block-styles.js";
import PersonDown from "../home-page-assets/personDown@3x.png";
import FreeFall from "../home-page-assets/freefall.svg";
import CoupleSitting from "../home-page-assets/girlAndBoy.svg";

export const AnimationLookDown = () => {
  return (
    <AnimationLookDownContainer>
      <img src={PersonDown} alt="person down" />
    </AnimationLookDownContainer>
  );
};

export const AnimationFreeFall = () => {
  return (
    <AnimationFreeFallContainer>
      <img src={FreeFall} alt="person-fallng" />
    </AnimationFreeFallContainer>
  );
};

export const AnimationCoupleSitting = () => {
  return (
    <AnimationCoupleSittingContainer>
      <img src={CoupleSitting} alt="couple-sitting" />
    </AnimationCoupleSittingContainer>
  );
};
