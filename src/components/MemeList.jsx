/* eslint-disable react/prop-types */
import React from "react";
import { useQuery } from "react-query";
import Meme from "./Meme";
import axios from "axios";
import { Button, createTheme, ImageList, ImageListItem } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D6D2DA",
    },
  },
});

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
    console.log("run");
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
      <Button
        theme={theme}
        variant="contained"
        sx={{ fontWeight: "bold" }}
        onClick={() => handleLoadMeme()}
      >
        Show memes
      </Button>
      <ImageList variant="masonry" cols={4} gap={20}>
        {memes.map((item) => (
          <ImageListItem key={item.id}>
            <Meme data={item}></Meme>
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default MemeList;
