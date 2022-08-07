import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import auth0 from "../images/auth0.PNG";
import DropDown from "./DropDown";

const Projects = () => {
  return (
    <StyledProjectContainer>
      <h2>Projects</h2>
      <div>
        <h2>01 Kursi-ecommerce store</h2>
        <div className="details-container">
          <DropDown>
            <div className="details">
              <p>Project Description</p>
              <p>Built with: </p>
            </div>
            <img src={auth0} />
          </DropDown>
        </div>
        <div className="project-line"></div>
      </div>
    </StyledProjectContainer>
  );
};

const StyledProjectContainer = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;

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

  .details-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    .details {
      margin-top: 3rem;
    }

    img {
      margin-top: 3rem;
      width: 60%;
    }
  }
`;

export default Projects;
