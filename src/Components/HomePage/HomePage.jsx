import axios from "axios";
import React, { useState } from "react";

const HomePage = () => {
  const [HomePageState, setHomePageState] = useState([]);
  const HomePageApi = async () => {
    await axios
      .get(
        "https://api.jikan.moe/v4/anime?q=One Piece, Draon Ball Super, Kimetsu No Yaiba, Bleach, Attack On Titan&sfw&limit=90"
      )
      .then((resp) => {
        console.log(resp.data);
        setHomePageState(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div></div>;
};

export default HomePage;
