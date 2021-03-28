import styled from "styled-components";

export const SectionContainer = styled.div`
  position: relative;
  display: flex;
  top: -80px;
  .backBlobTop {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: auto;
  }

  /* .backBlobBottom {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: auto;
    bottom: -20px;
    transform: scaleY(-1);
  } */

  .section-column {
    flex: 1;
    padding-top: 20px;
    /* padding: auto; */
    /* text-align: center; */
  }

  .section-column.column-left {
    text-align: center;

    /* padding: 30px 0px 0px 50px; */
  }

  .section-column.column-right {
    position: relative;
    align-items: center;
    justify-content: center;
    /* padding: 15px 30px 0px 0px; */
  }
`;

export const Title = styled.div`
  margin: 30px 0 50px 0;
  font-size: xx-large;
  color: white;
`;

export const NamePlateContainer = styled.div`
  margin: 20px 0 20px 0;
  color: white;
  text-align: center;
  h1,
  p {
    line-height: 0.5;
    color: black;
  }
`;

export const ProfileSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 100px 0 30px 0;
  /* margin: -150px; */
  flex: 1;
  /* align-items: center; */
  /* justify-content: center; */

  .profile-background {
    position: relative;
    height: 17vh;
    width: 17vh;
    /* background-color: white; */
    border: white solid 3px;
    border-radius: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    border: #e85b25 solid 2px;
    border-radius: 50%;
  }

  .contact-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 150px;
    height: 40px;
    background: white !important;
    border-radius: 10px;
  }
`;

export const AltSectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;

  .alt-section {
    height: 100%;
    width: 350px;
    /* background-color: white; */
    /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26); */
    /* border-radius: 20px; */
  }
`;

export const AboutMeContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  .aboutMeText {
    text-align: center;
    padding: 10px;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    width: 70%;
    color: #d4d4d4;
  }
`;
