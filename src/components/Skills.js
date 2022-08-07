import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutmetitle } from "../util";
// import css from "../images/logos/css.png";
// import figma from "../images/logos/figma.png";
// import git from "../images/logos/git.png";
// import html from "../images/logos/html.png";
// import js from "../images/logos/js.png";
// import mongo from "../images/logos/mongo.png";
// import python from "../images/logos/python.png";
// import react from "../images/logos/react.png";
// import sass from "../images/logos/sass.png";
// import sql from "../images/logos/sql.png";
// import node from "../images/logos/node.png";
// import unity from "../images/logos/unity.png";
import { FaHtml5, FaGitAlt } from "react-icons/fa";
import { DiCss3, DiSass } from "react-icons/di";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiUnity,
  SiFigma,
  SiAdobexd,
} from "react-icons/si";
import { TbBrandNextjs, TbApi } from "react-icons/tb";

const Skills = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.75 });

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return (
    <StyledContainer ref={element}>
      <StyledTitle variants={aboutmetitle} initial="hidden" animate={controls}>
        <h1>SKILLS</h1>
      </StyledTitle>
      <StyledLogoContainer>
        <li>
          <span>
            <FaHtml5 size={70} />
          </span>
          <p>HTML5</p>
        </li>
        <li>
          <span>
            <DiCss3 size={70} />
          </span>
          <p>CSS</p>
        </li>
        <li>
          <span>
            <SiJavascript size={70} />
          </span>
          <p>JAVASCRIPT + ES6</p>
        </li>
        <li>
          <span>
            <DiSass size={70} />
          </span>
          <p>SASS</p>
        </li>
        <li>
          <span>
            <SiTailwindcss size={70} />
          </span>
          <p>TAILWIND</p>
        </li>
        <li>
          <span>
            <SiReact size={70} />
          </span>
          <p>REACTjs</p>
        </li>
        <li>
          <span>
            <TbBrandNextjs size={70} />
          </span>
          <p>NextJs</p>
        </li>
        <li>
          <span>
            <TbApi size={70} />
          </span>
          <p>REST APIS</p>
        </li>
        <li>
          <span>
            <SiPython size={70} />
          </span>
          <p>PYTHON</p>
        </li>
        <li>
          <span>
            <SiPostgresql size={70} />
          </span>
          <p>SQL</p>
        </li>
        <li>
          <span>
            <SiMongodb size={70} />
          </span>
          <p>MONGO DB</p>
        </li>
        <li>
          <span>
            <FaGitAlt size={70} />
          </span>
          <p>GIT</p>
        </li>
        <li>
          <span>
            <SiFigma size={70} />
          </span>
          <p>FIGMA</p>
        </li>
        <li>
          <span>
            <SiUnity size={70} />
          </span>
          <p>UNITY</p>
        </li>
        <li>
          <span>
            <SiAdobexd size={70} />
          </span>
          <p>ADOBE XD</p>
        </li>
      </StyledLogoContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  height: 100vh;
  width: 100%;
  margin: 6rem auto;
  position: relative;
`;

const StyledTitle = styled(motion.div)`
  position: absolute;
  top: 30%;
  font-size: 4rem;
  opacity: 0.2;
  h1 {
    font-weight: 700;
    color: gray;
    opacity: 0.3;
  }
`;

const StyledLogoContainer = styled(motion.ul)`
  justify-content: center;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin: 6% 0;
  padding: 4rem;
  li {
    list-style: none;
    padding: 4rem;
    flex-basis: 23%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      font-weight: 700;
    }
  }
`;

const StyledLogos = styled(motion.li)`
  display: flex;
  justify-content: center;
  text-align: center;
  p {
    margin-top: 0;
    padding-top: 0;
  }
  list-style: none;
  img {
    width: 30%;
  }
`;

export default Skills;
