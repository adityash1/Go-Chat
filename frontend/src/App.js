import React, { useEffect } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header";

const App = () => {
  useEffect(() => {
    connect();
  }, []);

  const send = () => {
    console.log("send");
    sendMsg("Hello");
  };

  return (
    <div className="App">
      <Header />
      <button onClick={send}>Hit</button>
    </div>
  );
};

export default App;
