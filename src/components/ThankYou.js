import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
        You Have an <span>awesome</span> F@*#ing {day}, I mean that shit.
        Seriously.
      </p>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  height: 30vh;
  width: 80%;
  margin-top: 6rem;
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
`;

export default ThankYou;
