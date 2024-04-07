import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import "./styles.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const NavigationBlock = ({toggle}) => (
  <motion.ul variants={variants}>
    {itemIds.map((i) => (
      <MenuItem  key={i} name = {itemsName[i]} link = {itemsLink[i]} toggle = {toggle}/>
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
const itemsName = [
  "Каталог",
  "Оплата",
  "Доставка",
  "О нас",
  "Контакты",
];
const itemsLink = [
  "/catalog",
  "/pay",
  "/ship",
  "/about",
  "/contacts",
];