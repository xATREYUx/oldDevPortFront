import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: #be1e2d;
`;

export const HeaderSC = styled.div`
  width: 70vw;
  height: 3rem;
  /* margin-bottom: 10px; */
  margin: 15px;
  border-radius: 20px;
  box-shadow: 0px 17px 16px 1px rgba(58, 0, 0, 0.41);
  background: inset 0px 1px 0px 0px #ffffff,
    linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
`;

export const OuterColumn = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  width: 100%;
  margin: 12px;
`;

export const InnerColumn = styled.div`
  display: flex;
  flex: 5;
  flex-direction: column;
  margin: 12px;
  width: 100%;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  /* margin: 10; */
`;

export const WideRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 10px; */
  margin: 15px 0 15px;
  width: 100%;
  /* flex-direction: row; */
  border-radius: 20px;
  box-shadow: 5px 17px 16px 5px rgba(58, 0, 0, 0.41);
  background: white;
  overflow: hidden;
  & .jakobi {
    width: 100%;
  }
`;
export const Glass = styled.div`
  border-radius: 20px;
  /* position: absolute; */
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 68%,
    rgba(0, 0, 0, 0.07) 93%,
    rgba(0, 0, 0, 0.2) 98%,
    rgba(0, 0, 0, 0.3) 100%
  );
`;
