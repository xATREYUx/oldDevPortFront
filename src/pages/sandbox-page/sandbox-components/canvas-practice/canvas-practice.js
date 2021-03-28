import React from "react";

import {
  CanvasPracticeContainer,
  // CanvasButtonContainer,
  CanvasButton,
} from "./canvas-practice-styles";

import { Glass } from "../../sandbox-styles";

// import { drawFunction } from "./canvas-practice-utils";
import bounceIcon from "./icons/bounceIcon.png";
import cornersIcon from "./icons/cornersIcon.png";
import pencilIcon from "./icons/pencilIcon.png";
import heartIcon from "./icons/heartIcon.jpg";

import Canvas from "./canvas.js";

const CanvasPractice = () => {
  const iconImages = [bounceIcon, cornersIcon, pencilIcon, heartIcon];

  const ButtonList = () => {
    return iconImages.map((i) => {
      const index = iconImages.indexOf(i);
      const spacing = index * 60;
      return (
        <CanvasButton style={{ left: `${spacing}px` }}>
          <Glass>
            <img className={i} src={i} alt="Loading {i}" />
          </Glass>
        </CanvasButton>
      );
    });
  };

  return (
    <CanvasPracticeContainer>
      <Canvas />
      <ButtonList />
    </CanvasPracticeContainer>
  );
};

export default CanvasPractice;
