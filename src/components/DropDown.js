import React, { useState } from "react";

const DropDown = ({ children }) => {
  const [dropDown, setDropDown] = useState(true);
  return (
    <div onClick={() => setDropDown(!dropDown)}>{dropDown ? children : ""}</div>
  );
};

export default DropDown;
