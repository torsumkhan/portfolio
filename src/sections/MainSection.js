import React from "react";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const MainSection = () => {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default MainSection;
