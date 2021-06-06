import styled from "styled-components";

export const HomePageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

   min-height: 2000px;
  /* background-color: #fff; */
  /* height: 150vh; */
  width: 100vw;

  .backBlobBottom {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 30vh;
    bottom: -20px;
    transform: scaleY(-1);
  }

  .bubbleBlobs {
    z-index: -2;
    position: absolute;
    width: 30vw;
    height: 45vh;
    bottom: 95px;
  }
`;

export const Header = styled.h1`
  /* height: 10vh; */
`;
