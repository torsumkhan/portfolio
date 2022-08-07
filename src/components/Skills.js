import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutmetitle } from "../util";
import css from "../images/logos/css.png";
import figma from "../images/logos/figma.png";
import git from "../images/logos/git.png";
import html from "../images/logos/html.png";
import js from "../images/logos/js.png";
import mongo from "../images/logos/mongo.png";
import python from "../images/logos/python.png";
import react from "../images/logos/react.png";
import sass from "../images/logos/sass.png";
import sql from "../images/logos/sql.png";
import node from "../images/logos/node.png";
import unity from "../images/logos/unity.png";

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
        <StyledLogos>
          <img src={html} />
        </StyledLogos>
        <StyledLogos>
          <img src={css} />
        </StyledLogos>
        <StyledLogos>
          <img src={js} />
        </StyledLogos>
        <StyledLogos>
          <img src={react} />
        </StyledLogos>
        <StyledLogos>
          <img src={sass} />
        </StyledLogos>
        <StyledLogos>
          <img src={node} />
        </StyledLogos>
        <StyledLogos>
          <img src={python} />
        </StyledLogos>
        <StyledLogos>
          <img src={sql} />
        </StyledLogos>
        <StyledLogos>
          <img src={mongo} />
        </StyledLogos>
        <StyledLogos>
          <img src={git} />
        </StyledLogos>
        <StyledLogos>
          <img src={figma} />
        </StyledLogos>
        <StyledLogos>
          <img src={unity} />
        </StyledLogos>
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
  top: 20%;
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
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
`;

const StyledLogos = styled(motion.li)`
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
