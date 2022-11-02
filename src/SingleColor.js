import React, { useState, useEffect } from "react";
// This is function is used for convering colors to Hex..
// But i didn't use here, cause i used my Hex property on value.js

// import rgbToHex from "./util";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  // Used for turning array to string seperated comma.
  const bcg = rgb.join(",");
  const HexcolorHash = `#${hexColor}`;

  useEffect(() => {
    let ClearModal = setTimeout(() => {
      setAlert(false);
    }, 1000);

    return () => clearInterval(ClearModal);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(HexcolorHash);
      }}
    >
      <p className="percent-value"> {weight} %</p>
      <p className="color-value">{HexcolorHash}</p>
      {alert && <p className="alert">Copied to Clipboard...</p>}
    </article>
  );
};

export default SingleColor;
