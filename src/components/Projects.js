import React, { useState } from "react";
import styled from "styled-components";
import { FaReact, FaStripe, FaCss3, FaUnity } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiGraphql,
  SiStrapi,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiBlender,
} from "react-icons/si";
import { motion } from "framer-motion";

import DropDown from "./DropDown";
import { AnimateSharedLayout } from "framer-motion";
import kursi from "../images/01-kursi.png";
import ign from "../images/03-superign.png";
import spotify from "../images/04-spotify.png";
import pexels from "../images/05-pexels.png";
import never from "../images/06-never-gone.png";
import football from "../images/06-football.png";
import capture from "../images/02-capture.png";
import { hover } from "@testing-library/user-event/dist/hover";

const Projects = () => {
  return (
    <StyledProjectContainer>
      <div>
        <AnimateSharedLayout>
          <motion.div className="details-container" layout>
            <DropDown title="01 Kursi - Ecommerce Store">
              <div className="grid">
                <div className="details">
                  <h3>Fullstack Developer | UI Designer</h3>
                  <p>
                    A fullstack Ecommerce store for luxury home furniture.
                    Complete with checkout, payment solutions using Stripe and
                    user authentication with Auth0.
                  </p>
                  <p>Made with:</p>
                  <div>
                    <FaReact size={42} />
                    <TbBrandNextjs size={42} />
                    <SiJavascript size={42} />
                    <SiGraphql size={42} />
                    <SiStrapi size={42} />
                    <FaStripe size={42} />
                  </div>
                  <p>
                    <a
                      href="https://onlinestore-chi.vercel.app/"
                      target="_blank"
                    >
                      Live Site
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/torsumkhan/ecommerce-store"
                      target="_blank"
                    >
                      Github
                    </a>
                  </p>
                </div>
                <img src={kursi} />
              </div>
            </DropDown>

            <DropDown title="02 Capture - Social Media Application">
              <div className="grid">
                <div className="details">
                  <h3>Fullstack Developer | UI Designer</h3>
                  <p>
                    A full stack social media application that can let users
                    post content, upload and share images and create a digital
                    album of images and other media.
                  </p>
                  <p>Made with:</p>
                  <div>
                    <SiJavascript size={42} />
                    <FaReact size={42} />
                    <SiRedux size={42} />
                  </div>
                  <p>
                    <a
                      href="https://github.com/torsumkhan/capsule-social-media-app"
                      target="_blank"
                    >
                      Github
                    </a>
                  </p>
                </div>
                <img src={capture} />
              </div>
            </DropDown>

            <DropDown title="03 SuperIGN - Videogame Database">
              <div className="grid">
                <div className="details">
                  <h3>Frontend Developer | UI Designer</h3>
                  <p>
                    A videogame database application that fetches trending and
                    popular videogames data from an external API.
                  </p>
                  <p>Made with:</p>
                  <div>
                    <FaReact size={42} />
                    <SiJavascript size={42} />
                    <SiRedux size={42} />
                  </div>
                  <p>
                    <a href="https://superign.netlify.app/" target="_blank">
                      Live Site
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/torsumkhan/super-ign"
                      target="_blank"
                    >
                      Github
                    </a>
                  </p>
                </div>
                <img src={ign} />
              </div>
            </DropDown>

            <DropDown title="04 MySpotify - Music Streaming App">
              <div className="grid">
                <div className="details">
                  <h3>Frontend Developer | UI Designer</h3>
                  <p>
                    A music streaming app that fetches music from an external
                    database and has the functionality of a typical music
                    streaming app.
                  </p>
                  <p>Made with:</p>
                  <div>
                    <FaReact size={42} />
                    <SiJavascript size={42} />
                    <SiRedux size={42} />
                    <SiTailwindcss size={42} />
                  </div>
                  <p>
                    <a href="https://superspotify.netlify.app/" target="_blank">
                      Live Site
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/torsumkhan/my-spotify"
                      target="_blank"
                    >
                      Github
                    </a>
                  </p>
                </div>
                <img src={spotify} />
              </div>
            </DropDown>

            <DropDown title="05 MegaPexels - Image Sharing App">
              <div className="grid">
                <div className="details">
                  <h3>Frontend Developer | UI Designer</h3>
                  <p>
                    Image sharing app that fetches the most-updated images from
                    the popular image viewing website, Pexels. Has endless
                    scrolling functionality and a search feature to search for
                    different categories.
                  </p>
                  <p>Made with:</p>
                  <div>
                    <SiHtml5 size={42} />
                    <FaCss3 size={42} />
                    <SiJavascript size={42} />
                  </div>
                  <p>
                    <a href="https://megapexels.netlify.app/" target="_blank">
                      Live Site
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/torsumkhan/mega-pexel"
                      target="_blank"
                    >
                      Github
                    </a>
                  </p>
                </div>
                <img src={pexels} />
              </div>
            </DropDown>

            <DropDown title="06 Super Football - Soccer Rankings App">
              <div className="grid">
                <div className="details">
                  <h3>Frontend Developer | Designer</h3>
                  <p>
                    Web application for soccer fans to get current and past
                    rankings from major international leagues.
                  </p>
                  <p>Made with:</p>
                  <div>
                    <SiJavascript size={42} />
                    <FaReact size={42} />
                  </div>
                  <p>
                    <a
                      href="https://super-football.netlify.app/"
                      target="_blank"
                    >
                      Live Site
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/torsumkhan/Football-app"
                      target="_blank"
                    >
                      Github
                    </a>
                  </p>
                </div>
                <img src={football} />
              </div>
            </DropDown>

            <DropDown
              title="07 Never Gone - Interactive Video Game"
              style={{
                "@media (max-width:700px)": {
                  fontSize: "1rem",
                },
              }}
            >
              <div className="grid">
                <div className="details">
                  <h3>Game Developer | Designer</h3>
                  <p>
                    A short, narrative immersive video game where you follow in
                    the footsteps of a father as he relives memories with his
                    daughter, depicting the unique quality of this special bond.
                  </p>
                  <p>Made with:</p>
                  <div>
                    <FaUnity size={42} />
                    <SiBlender size={42} />
                  </div>
                  <p>
                    <a href="https://torsum.itch.io/never-gone" target="_blank">
                      Live Site
                    </a>
                  </p>
                </div>
                <img src={never} />
              </div>
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
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    img {
      margin-top: 3rem;
      width: 60%;
    }
  }

  .project {
    padding: 1rem 0rem;
    @media (max-width: 700px) {
      div {
        h1 {
          font-size: 2rem;
        }
      }
    }
  }

  .details-container {
    display: flex;
    flex-direction: column;

    .details {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
      h3 {
        font-size: 2rem;
      }
      p {
        font-size: 1.8rem;
      }
      a {
        text-decoration: none;
        color: black;
      }
      div {
        display: flex;
        gap: 1.2rem;
      }
    }
  }

  @media (max-width: 1700px) {
    margin-top: 8rem;
    .details {
      margin-top: 4rem;
    }
  }
  @media (max-width: 900px) {
    .grid {
      display: flex;
    }
    img {
      display: none;
    }
  }
  @media (max-width: 700px) {
    margin-top: 6rem;
  }
`;

const styledGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default Projects;
