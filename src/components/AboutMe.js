import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutmetitle } from "../util";

const AboutMe = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.75 });
  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, view]);

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
          Lifelong <span>learner</span>, coffee addict and a proud dad.
        </p>
        <p>If you fancy a chat feel free to drop me a line.</p>
      </StyledAboutDesc>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  height: 60vh;
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
  @media (max-width: 900px) {
    h1 {
      display: none;
    }
  }
`;

const StyledAboutDesc = styled(motion.div)`
  align-items: center;
  line-height: 4rem;
  text-align: left;
  font-size: 2.8rem;
  padding-left: 8rem;
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
    margin-top: 2rem;
  }
  @media (max-width: 1700px) {
    h2 {
      font-size: 2.8rem;
      text-align: left;
    }
    p {
      font-size: 2rem;
      margin-top: 0rem;
    }
  }
  @media (max-width: 700px) {
    padding: 0 2rem;
    text-align: center;
    margin: 1rem 0.3rem;
    h2 {
      font-size: 2.4rem;
      text-align: center;
    }
    p {
      font-size: 1.8rem;
      margin-top: 0rem;
      line-height: 2.8rem;
    }
  }
`;

export default AboutMe;
