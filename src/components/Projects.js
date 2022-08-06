import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <StyledProjectContainer>
      <h2>Projects</h2>
      <div className="project">
        <h2>Kursi-ecommerce store</h2>
        <div className="details">
          <p>Project Description</p>
          <img />
        </div>
        <div className="project-line"></div>
      </div>
    </StyledProjectContainer>
  );
};

const StyledProjectContainer = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  background: red;
  color: white;
  h2 {
    display: block;
    font-size: 3rem;
  }
  .project-line {
    background: black;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .project {
    padding: 3rem 0rem;
    cursor: pointer;
  }
`;

export default Projects;
