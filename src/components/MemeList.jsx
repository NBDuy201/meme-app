/* eslint-disable react/prop-types */
import React from "react";
import { useQuery } from "react-query";
import Meme from "./Meme";
import axios from "axios";

const getData = async () => {
  try {
    const resp = await axios.get("https://api.imgflip.com/get_memes");
    return resp.data.data.memes;
  } catch (error) {
    console.log(error);
  }
};

const MemeList = () => {
  const { data, status, isLoading, error } = useQuery("memes", getData);

  const [memes, setMemes] = React.useState([]);

  React.useEffect(() => {
    handleLoadMeme();
  }, [status, data]);

  const handleLoadMeme = () => {
    if (status === "success") {
      setMemes(data);
    }
  };

  // Hanle loading
  if (isLoading) return "Loading...";

  // Hanle error
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <button onClick={handleLoadMeme}>Show memes</button>
      {memes.map((item) => (
        <div key={item.id} className="meme-container">
          <Meme data={item}></Meme>
        </div>
      ))}
    </>
  );
};

export default MemeList;
