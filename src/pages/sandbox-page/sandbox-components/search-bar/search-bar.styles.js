import styled from "styled-components";

export const SearchBarContainer = styled.div`
  height: 4rem;
  display: flex;
  color: white;
  font-size: 20px;
  background-color: #e02525;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  & form {
  }
  & button {
    font-weight: bold;
    color: white;
    /* flex: 1; */
  }
  & input {
    width: 90%;
    padding: 5px;
    /* flex: 3; */
  }
`;

export const SearchGlass = styled.div`
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

export const SearchLeft = styled.div`
  flex: 2;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
export const SearchRight = styled.div`
  flex: 4;
  text-align: center;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */

  /* flex: 1; */
  /* flex-direction: column; */
`;
