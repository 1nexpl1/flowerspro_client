import React from "react";
import s from "./Title.module.css";
const Title = ({ children, ...props }) => {
  return <span className={s.text}>{children}</span>;
};

export default Title;
