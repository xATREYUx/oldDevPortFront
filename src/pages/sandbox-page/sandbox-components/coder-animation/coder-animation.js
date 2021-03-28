import React from "react";
import { CoderAnimationContainer } from "./coder-animation.styles";
import CODER_SVG from "./coder-animation-paths";
import { Glass } from "../../sandbox-styles";

const CoderAnimation = () => {
  const selector = document.querySelectorAll("#coderAnimation path");
  for (let i = 0; i < selector.length; i++) {
    console.log(`Letter ${i} is ${selector[i].getTotalLength()}`);
  }

  return (
    <CoderAnimationContainer>
      <Glass id="coderSvgId">
        <CODER_SVG />
      </Glass>
    </CoderAnimationContainer>
  );
};

export default CoderAnimation;
