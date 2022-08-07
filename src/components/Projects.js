import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import auth0 from "../images/auth0.PNG";
import DropDown from "./DropDown";
import { AnimateSharedLayout } from "framer-motion";

const Projects = () => {
  return (
    <StyledProjectContainer>
      <h2>Projects</h2>
      <div>
        <AnimateSharedLayout>
          <motion.div className="details-container" layout>
            <DropDown title="01 Kursi - Ecommerce Store">
              <div className="details">
                <p>Project Description</p>
                <p>Built with: </p>
              </div>
              <img src={auth0} />
            </DropDown>

            <DropDown title="02 Capture - Social Media App">
              <div className="details">
                <p>Project Description</p>
                <p>Built with: </p>
              </div>
              <img src={auth0} />
            </DropDown>

            <DropDown title="03 SuperIGN - Video Game Database">
              <div className="details">
                <p>Project Description</p>
                <p>Built with: </p>
              </div>
              <img src={auth0} />
            </DropDown>

            <DropDown title="04 mySpotify - Music Streaming Application">
              <div className="details">
                <p>Project Description</p>
                <p>Built with: </p>
              </div>
              <img src={auth0} />
            </DropDown>

            <DropDown title="05 MegaPexels - Image Sharing Application">
              <div className="details">
                <p>Project Description</p>
                <p>Built with: </p>
              </div>
              <img src={auth0} />
            </DropDown>
          </motion.div>
        </AnimateSharedLayout>
      </div>
    </StyledProjectContainer>
  );
};

const StyledProjectContainer = styled(motion.div)`
  min-height: 100vh;
  margin: 4rem 8rem;

  h2 {
    display: block;
    font-size: 3rem;
  }
  .project-line {
    background: gray;
    height: 0.2rem;
    margin: 3rem 0rem;
    width: 100%;
  }
  .project {
    padding: 1rem 0rem;
    cursor: pointer;
  }

  .details-container {
    display: flex;
    flex-direction: column;

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
