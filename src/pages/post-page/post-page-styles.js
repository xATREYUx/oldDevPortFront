import styled from "styled-components";

export const PostPageContainer = styled.div`
  position: relative;
  flex-direction: column;

  .post-image-section-container {
    display: flex;
    justify-content: space-around;
    min-height: 300px;
    margin: 30px 50px 30px 50px;
  }
  .post-image-container {
    height: 30vw;
    width: 30vw;
    border: 1px dashed gray;
  }
  .post-section-container {
    display: flex;
    flex-direction: column;
    min-height: 200px;
    min-width: 50vw;
    margin: 0 50px 0 50px;
  }
  .post-content {
    border: 1px solid black;
    border-radius: 15px;
    min-height: 300px;
  }
  .logo {
    height: 10vw;
    align-self: center;
    transform: translateY(-55px);
  }
`;
