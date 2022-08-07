import React, { useState } from "react";
import { motion } from "framer-motion";

const DropDown = ({ children, title }) => {
  const [dropDown, setDropDown] = useState(true);
  return (
    <motion.div
      layout
      className="project"
      onClick={() => setDropDown(!dropDown)}
      style={{ cursor: "Pointer" }}
    >
      <motion.h2 layout style={{ fontSize: "3rem", fontWeight: 400 }}>
        {title}
      </motion.h2>
      {dropDown ? children : ""}
      <motion.div layout className="project-line"></motion.div>
    </motion.div>
  );
};

export default DropDown;
