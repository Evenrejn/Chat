import s from "./Message.module.css";

export const Message = ({ message }) => {
  return <div className={s.messages}>message: {message}</div>;
};
