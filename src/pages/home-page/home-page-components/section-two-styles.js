import styled from "styled-components";

export const SectionContainer = styled.div`
  position: relative;
  display: flex;
  height: 30vh;
  .backBlobBottom {
    z-index: -2;
    position: absolute;
    width: 100vw;
    height: auto;
    bottom: 0px;
    transform: scaleY(-1);
  }
`;
