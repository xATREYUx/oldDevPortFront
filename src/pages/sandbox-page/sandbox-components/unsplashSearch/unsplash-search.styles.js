import styled from "styled-components";

export const UnsplashContainer = styled.div`
  display: "flex";

  /* justify-content: "center"; */
  /* text-align: "center"; */
  /* border-top-right-radius: "20px";
  border-top-left-radius: "20px"; */
`;

export const NoItemsYet = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 10px;
  /* justify-content: center; */
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(129px, 1fr));
  grid-gap: 2px 1px;
  grid-auto-rows: 10;
  & img {
    width: 130px;
  }
`;
