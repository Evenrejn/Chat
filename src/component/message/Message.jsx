import s from "./Message.module.css";

export const Message = ({ message }) => {
  const { author, text } = message;

  return (
    <div className={s.messages}>
      message: {text} author: {author}
    </div>
  );
};
