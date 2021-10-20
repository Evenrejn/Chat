import s from "./Message.module.css";

export const Message = ({ message }) => {
  const { author, text } = message;

  return (
    <div className={author === "User" ? `${s.messages} ${s.myMessage}` : `${s.messages}`}>
      message: {text} <br/>author: {author}
    </div>
  );
};

