import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { container, titleAnim, titleCaption } from "../util";

const Intro = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledIntro>
        <div className="title">
          <StyledHide>
            <motion.h2 variants={titleAnim}>hello, I am Torsum,</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h3 variants={titleCaption}>
              Designer & <span>Front-end Developer</span>
            </motion.h3>
          </StyledHide>
        </div>
      </StyledIntro>
    </motion.div>
  );
};

const StyledIntro = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
`;

const StyledHide = styled(motion.div)`
  h2 {
    font-size: 4rem;
    font-weight: 700;
  }
  h3 {
    margin-top: 2rem;
    font-size: 3.4rem;
    font-weight: 400;
  }
`;

export default Intro;
