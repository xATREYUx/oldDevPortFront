import React, { useState } from "react";
import { AccordionContainer } from "./accordion.styles";
import DifficultyLevelDropdown from "./difficulty-level-dropdown";
import "./accordion.styles";

const Accordion = () => {
  const [currentTab, setCurrentTab] = useState();
  return (
    <AccordionContainer>
      <h1>Options</h1>
      <DifficultyLevelDropdown />
    </AccordionContainer>
  );
};

export default Accordion;
