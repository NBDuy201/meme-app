/* eslint-disable react/prop-types */
import React from "react";

const Meme = ({ data }) => {
  return (
    <>
      <img
        className="meme"
        src={data.url}
        srcSet={data.url}
        alt={data.name}
        loading="lazy"
      />
    </>
  );
};

export default Meme;
