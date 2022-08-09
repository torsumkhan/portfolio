import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Typical from "react-typical";

const ThankYou = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const current = new Date();
  let day = weekday[current.getDay()];
  return (
    <StyledContainer>
      <h3>Thank you for sticking around &</h3>
      <p>
        hey, You have{" "}
        <span>
          <Typical
            steps={[
              "an amazing",
              3000,
              "an adventurous",
              3000,
              "a wild",
              3000,
              "an awesome",
              3000,
              "an exciting",
              3000,
              "an unbelievable",
              3000,
              "a majestic",
              3000,
              "a beautiful",
              3000,
              "a spectacular",
              3000,
              "a stunning",
              3000,
              "an inspirational",
              3000,
              "a wonderful",
              3000,
              "a briliant",
              3000,
              "an enjoyable",
              3000,
              "a fabulous",
              3000,
              "a phenomenal",
              3000,
              "a marvelous",
              3000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </span>
        {day}! I mean that shit. Seriously.
      </p>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  height: 30vh;
  width: 80%;
  margin-top: 8rem;
  margin-left: 8rem;
  text-align: left;
  span {
    font-weight: 600;
  }
  h3 {
    font-size: 3rem;
  }
  p {
    margin-top: 3rem;
    font-weight: 400;
    font-size: 3.2rem;
  }

  @media (max-width: 1700px) {
    margin-top: 30rem;
  }

  @media (max-width: 700px) {
    margin-top: 2rem;
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

export default ThankYou;
