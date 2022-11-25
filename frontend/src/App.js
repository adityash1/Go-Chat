import React, { useEffect, useState } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New Message");
      setChatHistory((chatHistory) => [...chatHistory, msg]);
      console.log(chatHistory);
    });
  }, [chatHistory]);

  const send = () => {
    console.log("send");
    sendMsg("Hello");
  };

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <button onClick={send}>Hit</button>
    </div>
  );
};

export default App;
