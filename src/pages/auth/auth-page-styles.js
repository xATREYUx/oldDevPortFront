import styled from "styled-components";

export const AuthFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;
export const FormContainer = styled.div`
  width: 40vw;
  background-color: white;
  /* border: 1px solid black; */
  border-radius: 20px;
  padding: 25px 25px 30px 25px;
  margin: 30px 0 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  h2 {
    text-align: center;
    color: #e85b26;
  }
  .auth-button {
    text-align: center;
  }
`;
