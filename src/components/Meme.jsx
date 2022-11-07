/* eslint-disable react/prop-types */
import React from "react";

const Meme = ({ data }) => {
  return <img className="meme" src={data.url} alt="" />;
};

export default Meme;
