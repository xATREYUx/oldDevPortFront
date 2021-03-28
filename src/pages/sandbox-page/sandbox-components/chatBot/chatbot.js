import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#fff",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#e02525",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#e02525",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const config = {
  // overflowY: "hidden",
  width: "auto",
  height: "auto",
};

const steps = [
  {
    id: "1",
    message: "What number I am thinking?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: 1, label: "Number 1", trigger: "4" },
      { value: 2, label: "Number 2", trigger: "3" },
      { value: 3, label: "Number 3", trigger: "3" },
    ],
  },
  {
    id: "3",
    message: "Wrong answer, try again.",
    trigger: "2",
  },
  {
    id: "4",
    message: "Awesome! You are a telepath!",
    end: true,
  },
];

const Bot = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
};

export default Bot;
