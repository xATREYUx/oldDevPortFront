import styled from "styled-components";

export const CanvasPracticeContainer = styled.div`
  position: relative;
  display: flex;

  background-color: blue;
`;

export const CanvasButton = styled.div`
  position: absolute;
  border: 1px red solid;
  height: 50px;
  width: 50px;
  margin: 15px;
  border-radius: 50px;
  background-color: white;

  & img {
    width: 100%;
    padding: 10px;
    /* border-radius: 50px; */
  }
`;
//export const CanvasButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 3px 0 0px 0px;
//   position: absolute;
//
// `;
