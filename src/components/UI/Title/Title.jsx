import React from "react";
import s from "./Title.module.css";
import { motion } from "framer-motion"
const Title = ({ children, ...props }) => {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
  };
  return (
    <div className={s.textWrapper}>
      <motion.h1
        initial={{ y: "100%" , opacity: 0}}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%" , opacity: 0}}
        transition={{ duration: 0.5 }}
        className={s.text}>{children}</motion.h1>
    </div>
  );
};

export default Title;
