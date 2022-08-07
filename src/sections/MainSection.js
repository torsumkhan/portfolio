import React from "react";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ThankYou from "../components/ThankYou";

const MainSection = () => {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Projects />
      <Skills />
      <ThankYou />
      <Contact />
    </div>
  );
};

export default MainSection;
