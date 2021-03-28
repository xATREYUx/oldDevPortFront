import styled from "styled-components";

export const AnimationLookDownContainer = styled.div`
  margin: auto;
  z-index: -1;
  position: relative;
  height: 50px;
  width: 70%;
  margin-top: 30px;
  bottom: -3px;
  /* height: 12.4vh; */
  /* top: 5.3vh; */
  /* left: 45px; */
  img {
    position: absolute;
    left: -10px;
    height: 50px;
    /* bottom: 0; */
  }
`;

export const AnimationFreeFallContainer = styled.div`
  /* background-color: red; */
  z-index: -1;
  position: absolute;
  height: 45%;
  width: 20px;
  /* top: 5.3vh; */
  left: -35px;

  img {
    position: absolute;
    height: 30px;
    bottom: 0;
    left: -60;
    transform: scaleX(-1);
  }
`;

export const AnimationCoupleSittingContainer = styled.div`
  display: flex;
  width: 100vw;
  position: absolute;
  /* justify-content: center;
  text-align: center; */
  left: 35vw;
  top: -38px;
  /* background-color: red; */
  img {
    justify-content: center;
    height: 70px;
  }
`;
