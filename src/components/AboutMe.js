import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <StyledContainer>
      <StyledTitle>
        <h1>About me</h1>
      </StyledTitle>
      <StyledAboutDesc>
        <h2>Marketer/humanitarian turned developer.</h2>
        <p>
          Passion for combining logic and design to create user-friendly
          applications.
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
`;

const StyledTitle = styled(motion.div)`
  position: absolute;
  top: 5%;
  left: -15%;
`;

const StyledAboutDesc = styled(motion.div)`
  align-items: center;
  line-height: 4rem;
  text-align: left;
  font-size: 2.8rem;
  margin-left: 3rem;
  h2 {
    font-weight: 400;
  }
  p {
    font-weight: 200;
  }
`;

export default AboutMe;
