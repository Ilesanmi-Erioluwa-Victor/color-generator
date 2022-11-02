import React, { useState } from "react";
import rgbToHex from "./util";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  // Used for turning array to string seperated comma.
  const bcg = rgb.join(",");
  console.log(bcg);
  return (
    <article className={`color`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className="percent-value"> {weight} %</p>
    </article>
  );
};

export default SingleColor;
