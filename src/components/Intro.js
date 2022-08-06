import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div>
      <StyledIntro>
        <div className="title">
          <StyledHide>
            <h2>hello, I am Torsum,</h2>
          </StyledHide>
          <StyledHide>
            <h3>
              Designer & <span>Front-end Developer</span>
            </h3>
          </StyledHide>
        </div>
      </StyledIntro>
    </div>
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
    font-weight: 400;
  }
  h3 {
    margin-top: 2rem;
    font-size: 3.4rem;
    font-weight: 200;
  }
`;

export default Intro;
