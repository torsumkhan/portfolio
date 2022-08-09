import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Typical from "react-typical";
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
            <motion.h2 id="#target" variants={titleAnim}>
              <Typical
                steps={[
                  "hello",
                  3000,
                  "hola",
                  3000,
                  "bonjour",
                  3000,
                  "guten tag",
                  3000,
                  "salve",
                  3000,
                  "nǐn hǎo",
                  3000,
                  "asalaam alaikum",
                  3000,
                  "olá",
                  3000,
                  "namaste",
                  3000,
                  "zdravstvuyte",
                  3000,
                  "konnichiwa",
                  3000,
                  "goddag",
                  3000,
                  "hej",
                  3000,
                  "anyoung haseyo",
                  3000,
                ]}
                loop={Infinity}
                wrapper="b"
              />
              , I am Torsum.
            </motion.h2>
          </StyledHide>
          <StyledHide id="target">
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
