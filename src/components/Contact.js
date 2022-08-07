import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { contacttitle } from "../util";

import email from "../images/logos/email.png";
import github from "../images/logos/github.png";
import linkedin from "../images/logos/linkedin.png";
import twitter from "../images/logos/twitter.png";

const Contact = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.75 });

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return (
    <StyledContainer ref={element}>
      <StyledTitle variants={contacttitle} initial="hidden" animate={controls}>
        <h1>CONTACT</h1>
      </StyledTitle>
      <StyledLogoContainer>
        <img src={github} />
        <img src={email} />
        <img src={linkedin} />
        <img src={twitter} />
      </StyledLogoContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  height: 60vh;
  width: 55%;
  margin-top: 15rem;
  margin-left: 10rem;
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

const StyledLogoContainer = styled(motion.dv)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export default Contact;
