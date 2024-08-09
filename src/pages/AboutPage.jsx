import React from "react";
import Title from "../components/UI/Title/Title";
import About from "../components/About/About";
import HoverContact from "../components/HoverContact/HoverContact";
import { motion, useIsPresent } from "framer-motion";

const AboutPage = () => {
  const isPresent = useIsPresent();
  
  return (
    <div className="aboutWrapper">
      <Title>О нас</Title>
      <About />
      <HoverContact />
    </div>
  );
};

export default AboutPage;
