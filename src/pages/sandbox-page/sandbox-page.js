import React, { Component } from "react";

import jacobi from "../../images/spaceCockpit.gif";
// import bear from "./images/bear-for-web.png";

import UnSplashSearch from "./sandbox-components/unsplashSearch/UnsplashSearch";
import Weather from "./sandbox-components/weather/weather";
import Clock from "./sandbox-components/clock/Clock";
import AuthApp from "./sandbox-components/authApp/AuthApp";
import SalesGraph from "./sandbox-components/graphApp/salesGraph";
import ChatBot from "./sandbox-components/chatBot/chatbot";
import Header from "./sandbox-components/header/header";
// import "./components/header/header.css";
import CanvasPractice from "./sandbox-components/canvas-practice/canvas-practice";
import CoderAnimation from "./sandbox-components/coder-animation/coder-animation";
import Accordion from "./sandbox-components/accordion/accordion";
import ShopSampleButton from "./sandbox-components/shop-sample-route/shop-sample-route";

import {
  AppContainer,
  HeaderSC,
  ComponentContainer,
  OuterColumn,
  InnerColumn,
  Row,
  WideRow,
  Glass,
} from "./sandbox-styles";

console.log("----Main app render----");

class SandBox extends Component {
  render() {
    return (
      <AppContainer>
        {/* Header */}
        <Row>
          <HeaderSC>
            <Header />
          </HeaderSC>
        </Row>

        {/* Left Column */}
        <Row>
          <OuterColumn>
            <ComponentContainer>
              <Glass>
                <Clock />
              </Glass>
            </ComponentContainer>
            <ComponentContainer>
              <Glass>
                <Weather />
              </Glass>
            </ComponentContainer>
            <ComponentContainer>
              <CoderAnimation />
            </ComponentContainer>
            <ComponentContainer>
              <Glass>
                <AuthApp />
              </Glass>
            </ComponentContainer>
          </OuterColumn>
          {/* Middle Column */}
          <InnerColumn>
            <ComponentContainer>
              <Row>
                <img className="jakobi" src={jacobi} alt="Loading Jacobi" />
              </Row>
            </ComponentContainer>
            <Row>
              <ComponentContainer>
                <Glass>
                  <Accordion />
                </Glass>
              </ComponentContainer>
            </Row>
            <Row>
              <ComponentContainer>
                <Glass>
                  <CanvasPractice />
                </Glass>
              </ComponentContainer>
            </Row>
          </InnerColumn>
          {/* Right Column */}
          <OuterColumn>
            <ComponentContainer>
              <Glass>
                <ChatBot />
              </Glass>
            </ComponentContainer>
            <Row>
              <ComponentContainer>
                <Glass>
                  <ShopSampleButton />
                </Glass>
              </ComponentContainer>
            </Row>
            <Row>
              <ComponentContainer>
                <Glass>
                  <UnSplashSearch />
                </Glass>
              </ComponentContainer>
            </Row>
          </OuterColumn>
        </Row>
        {/* wide section */}
        <WideRow>
          <ComponentContainer>
            <Glass>
              <SalesGraph />
            </Glass>
          </ComponentContainer>
        </WideRow>
      </AppContainer>
    );
  }
}

export default SandBox;
