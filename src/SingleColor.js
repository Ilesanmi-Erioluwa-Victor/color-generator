import React, { useState } from "react";
import rgbToHex from "./util";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);

  // Used for turning array to string seperated comma.
  const bcg = rgb.join(",");
  console.log(bcg);
  return (
    <article className={`color`} style={{ backgroundColor: `rgb(${bcg})` }}>
      SingleColor
    </article>
  );
};

export default SingleColor;
