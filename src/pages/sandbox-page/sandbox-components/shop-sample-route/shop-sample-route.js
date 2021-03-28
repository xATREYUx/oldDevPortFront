import React from "react";
import { ReactComponent as ShopPic } from "./shop@3x.svg";
import { ShopSampleButtonContainer } from "./shop-sample-route.styles";

const ShopSampleButton = () => {
  return (
    <ShopSampleButtonContainer>
      <ShopPic />
    </ShopSampleButtonContainer>
  );
};

export default ShopSampleButton;
