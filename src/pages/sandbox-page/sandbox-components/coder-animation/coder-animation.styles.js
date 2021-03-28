import styled from "styled-components";

export const CoderAnimationContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: #e3c532;

  #coderSvgId {
    padding: 15px;
  }

  #coderAnimation path:nth-of-type(0) {
    stroke-dasharray: 361.142333984375;
    stroke-dashoffset: 361.142333984375;
    animation: line-anim 2s ease forwards 0.3s;
  }

  & #coderAnimation path:nth-child(1) {
    stroke-dasharray: 297.5235595703125;
    stroke-dashoffset: 297.5235595703125;
    animation: line-anim 2s ease forwards 0.3s;
  }
  & #coderAnimation path:nth-child(2) {
    stroke-dasharray: 425.9800720214844;
    stroke-dashoffset: 450.9800720214844;
    animation: line-anim 2s ease forwards 0.3s;
  }
  & #coderAnimation path:nth-child(3) {
    stroke-dasharray: 301.87725830078125;
    stroke-dashoffset: 301.87725830078125;
    animation: line-anim 2s ease forwards 0.3s;
  }
  & #coderAnimation path:nth-child(4) {
    stroke-dasharray: 320.66348266601562;
    stroke-dashoffset: 320.66348266601562;
    animation: line-anim 2s ease forwards 0.6s;
  }
  & #coderAnimation path:nth-child(5) {
    stroke-dasharray: 361.142333984375;
    stroke-dashoffset: 361.142333984375;
    animation: line-anim 2s ease forwards 0.9s;
  }
  & #coderAnimation path:nth-child(6) {
    stroke-dasharray: 297.5235595703125;
    stroke-dashoffset: 297.5235595703125;
    animation: line-anim 2s ease forwards 1.2s;
  }
  & #coderAnimation path:nth-child(7) {
    stroke-dasharray: 425.9800720214844;
    stroke-dashoffset: 425.9800720214844;
    animation: line-anim 2s ease forwards 1.5s;
  }
  & #coderAnimation path:nth-child(8) {
    stroke-dasharray: 301.87725830078125;
    stroke-dashoffset: 301.87725830078125;
    animation: line-anim 2s ease forwards 1.8s;
  }
  & #coderAnimation path:nth-child(9) {
    stroke-dasharray: 233.66348266601562;
    stroke-dashoffset: 233.66348266601562;
    animation: line-anim 2s ease forwards 2.1s;
  }

  @keyframes line-anim {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
