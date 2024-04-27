import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({toggle}) => (
  <motion.ul variants={variants} className="ul">
    {itemIds.map(i => (
      <MenuItem toggle={toggle} i={i} key={i.id} />
    ))}
  </motion.ul>
);

const itemIds = [{ id: 0, name: 'Главная', to: '/main' }, 
{ id: 1, name: 'Каталог', to: '/catalog' }, 
{ id: 2, name: 'Оплата', to: '/payment' }, 
{id: 3, name: 'Доставка', to: '/ship'}, 
{id: 4, name: 'О нас', to: '/about'},
{id: 4, name: 'Контакты', to: '/contacts'}];
