import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: "red";
`;
export const WeatherLeft = styled.div`
  flex: 1;
  justify-content: "center";
`;

export const WeatherRight = styled.div`
  flex: 1;
  justify-content: "center";
  /* text-align: "center"; */
  // backgroundColor: "purple",
  // padding: "5px",
  // backgroundColor: "#e02525",
  // borderRadius: "20px",
  // minWidth: "300px",
  & img {
    margin-top: -20px;
  }
`;
