import s from "./Message.module.css";
import { Message } from "./Message";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (lastMessage?.author === "User") {
      timerId = setTimeout(() => {
        setMessages((state) => [
          ...state,
          { text: "I am bot, hi", author: "bot" },
        ]);
      }, 500);
    }

    return () => clearInterval(timerId);
  }, [messages]);

  return (
    <>
      <div>
        {messages.map((message, id) => (
          <Message key={id} message={message} />
        ))}
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your message..."
      />

      <button onClick={handleSendMessage}>Send</button>
    </>
  );
};
