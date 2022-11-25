import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Message.scss";

const Message = (props) => {
  const [message, setMessage] = useState(props.message);

  useEffect(() => {
    let temp = JSON.parse(props.message);
    setMessage(temp);
  }, [props.message]);

  return <div className="Message">{message.body}</div>;
};

export default Message;
