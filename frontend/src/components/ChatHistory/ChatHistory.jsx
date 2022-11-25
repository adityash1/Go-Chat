import React from "react";
import Message from "../Message";
import "./ChatHistory.scss";

const ChatHistory = ({ chatHistory }) => {
  const messages = chatHistory.map((message, index) => (
    <Message message={message.data} key={index} />
  ));

  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {messages}
    </div>
  );
};

export default ChatHistory;
