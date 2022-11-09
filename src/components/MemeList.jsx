/* eslint-disable react/prop-types */
import React from "react";
import { useQuery } from "react-query";
import Meme from "./Meme";
import axios from "axios";
import { Button, createTheme, ImageList, ImageListItem } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D2D6DA",
    },
  },
});

const getData = async () => {
  try {
    console.log("fetch");
    const resp = await axios.get("https://api.imgflip.com/get_memes");
    return resp.data.data.memes;
  } catch (error) {
    console.log(error);
  }
};

const MemeList = () => {
  const { data, isLoading, error, refetch } = useQuery("memes", getData);

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
        onClick={refetch}
      >
        Show memes
      </Button>
      <ImageList variant="masonry" cols={4} gap={20}>
        {data &&
          data.map((item) => (
            <ImageListItem key={item.id}>
              <Meme data={item}></Meme>
            </ImageListItem>
          ))}
      </ImageList>
    </>
  );
};

export default MemeList;
