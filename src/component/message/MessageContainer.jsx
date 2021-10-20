import s from "./Message.module.css";
import { Message } from "./Message";
import { useState, useEffect } from "react";
import * as React from 'react';
import { Send } from "@mui/icons-material";
// import InputUnstyled from '@mui/core/InputUnstyled';
// import { styled } from '@mui/system';
import { Input, InputAdornment } from "@mui/material";

export const MessageContainer = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    { text: "Some text", author: "User" },
    { text: "Some another text", author: "bot" },
  ]);

  const handleSendMessage = () => {
    if (text) {
      setMessages((state) => [...state, { text, author: "User" }]);
      setText("");
    }
  };

  const handlePressSend = ({ key }) => {
    if (key === "Enter" && text) {
      handleSendMessage();
    }
  }

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (lastMessage?.author === "User") {
      timerId = setTimeout(() => {
        setMessages((state) => [
          ...state,
          { text: "I am bot, hi", author: "bot" },
        ]);
      }, 2000);
    }

    return () => clearInterval(timerId);
  }, [messages]);

  return (
    <div className={s.wrap}>
      <div>
        {messages.map((message, id) => (
          <Message key={id} message={message} />
        ))}
      </div>

      <Input
        className={s.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите сообщение..."
        fullWidth={true}
        onKeyPress={handlePressSend}
        endAdornment={
          <InputAdornment position="end">
            {/* {text && ( */}
              <Send onClick={handleSendMessage} />
             {/* )} */}
          </InputAdornment>
        }
      />

      {/* <button onClick={handleSendMessage}>Send</button> */}
    </div>
  );
};
