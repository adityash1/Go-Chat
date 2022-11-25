import React, { useEffect } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";

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
      <button onClick={send}>Send</button>
    </div>
  );
};

export default App;
