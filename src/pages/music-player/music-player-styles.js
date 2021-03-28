import styled from "styled-components";

export const MusicAppContainer = styled.div`
  #login {
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: black;

    img {
      width: auto;
      height: 200px;
    }

    a {
      padding: 20px;
      border-radius: 99px;
      font-weight: 600;
      color: white;
      text-decoration: none;
      background-color: #1db954;
    }
  }
`;

export const HeaderContainer = styled.div`
  margin: 0;

  body::-webkit-scrollbar {
    display: none;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export const PlayerContainer = styled.div`
  .playerBody {
    display: flex;
  }
`;
export const SidebarContainer = styled.div`
  height: 100vh;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  flex: 0.2;
  min-width: 230px;
  background-color: #040404;

  hr {
    border: 1px solid #282828;
    width: 90%;
    margin: 10px auto;
  }

  .sidebarLogo {
    height: 100px;
    width: auto;
    padding: 10px;
    margin: auto;
  }

  .sidebarTitle {
    margin-left: 5px;
    padding: 5px;
    font-size: 12px;
  }
`;

export const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  height: 40px;
  cursor: pointer;
  transition: 200ms color ease-in;

  .sidebarOption:hover {
    color: white;
  }

  .sidebarOptionIcon {
    padding-left: 10px;
    padding-right: 10px;
  }
  p {
    margin-top: 10px;
    margin-left: 20px;
    font-size: 14px;
  }
`;

export const SongRowContainer = styled.div`
  margin-left: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  z-index: 100;
  color: white;

  .songRow:hover {
    cursor: pointer;
    background-color: black;
    opacity: 0.8;
  }
  .songRowInfo {
    margin-left: 20px;
  }
  .songRowInfo > h1 {
    font-size: 16px;
  }
  .songRowInfo > p {
    font-size: 14px;
    margin-top: 3px;
    color: gray;
  }
  .songRowAlbum {
    height: 40px;
    width: 40px;
  }
`;

export const PlayerBodyContainer = styled.div`
  .body {
    height: 100vh;
    flex: 0.8;
    color: white;
    padding: 30px;
    background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
    overflow-y: overlay;
  }
  .body::-webkit-scrollbar {
    display: none;
  }
  .body__info {
    display: flex;
    align-items: flex-end;
    padding: 10px;
  }
  .body__infoText {
    flex: 1;
  }
  .body__infoText > h2 {
    font-size: 48px;
    margin-bottom: 10px;
  }
  .body__infoText > p {
    font-size: 14px;
  }
  .body__info > img {
    height: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  }
  .body__icons {
    display: flex;
    align-items: center;
  }
  .body__icons > .MuiSvgIcon-root {
    margin-right: 20px;
  }
  .body__shuffle {
    font-size: 80px !important;
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .body__shuffle:hover {
    transition: 100ms transform ease-in;
    transform: scale(1.08);
  }
  .body__songs {
    margin: 20px -30px;
  }
`;

export const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  bottom: 0;
  height: 65px;
  width: 100%;
  background-color: #282828;
  padding: 20px;

  .footer__left {
    flex: 0.3;
    display: flex;
    align-items: center;
    color: white;
    max-width: 300px;
  }
  .footer__center {
    flex: 0.4;
    padding: 0 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
  }
  .footer__right {
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .footer__albumLogo {
    height: 60px;
    width: 60px;
    margin-right: 20px;
    object-fit: contain;
  }
  .footer__green {
    color: #1ed15e;
  }
  .footer__songInfo > h4 {
    margin-bottom: 5px;
  }
  .footer__songInfo > p {
    font-size: 12px;
  }
  .footer__icon:hover,
  .footer__green:hover {
    transition: transform 0.2 ease-in;
    transform: scale(1.2) !important;
  }
  .footer__right * .MuiSlider-root {
    color: #1ed15e;
  }
`;
