import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutmetitle } from "../util";

const AboutMe = () => {
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
        <h1>ABOUT ME</h1>
      </StyledTitle>
      <StyledAboutDesc>
        <h2>Marketer/humanitarian turned developer.</h2>
        <p>
          <span>Passion</span> for combining logic and design to create
          user-friendly applications.
        </p>
        <p>
          <span>Love</span> working with React and other cool frameworks.
        </p>
        <p>
          Lifelong <span>learner</span> and proud dad.
        </p>
        <p>If you fancy a chat feel free to drop me a line.</p>
      </StyledAboutDesc>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  height: 50vh;
  width: 100%;
  position: relative;
  margin-top: 4rem;
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

const StyledAboutDesc = styled(motion.div)`
  align-items: center;
  line-height: 4rem;
  text-align: left;
  font-size: 2.8rem;
  margin-left: 8rem;
  span {
    font-weight: 600;
  }
  h2 {
    font-weight: 400;
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  p {
    font-weight: 400;
    font-size: 2.6rem;
  }
  p:last-child {
    margin-top: 3rem;
  }
`;

export default AboutMe;
