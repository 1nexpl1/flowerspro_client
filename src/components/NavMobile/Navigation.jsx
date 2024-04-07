import { motion, useCycle } from "framer-motion";
import React, { useRef } from "react";
import { useDimensions } from "./useDimensions";
import MenuToggle from "./MenuToggle";
import { NavigationBlock } from "./NavigationBlock";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
    overflow: 'hidden'
  }),
  closed: {
    clipPath: "circle(30px at 50px 45px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const router = useNavigate();
  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <MenuToggle toggle={() => toggleOpen()} />
        <NavigationBlock toggle={toggleOpen} />
      </motion.nav>
    </>
  );
};

export default Navigation;
