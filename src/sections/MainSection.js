import React from "react";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const MainSection = () => {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  );
};

export default MainSection;
