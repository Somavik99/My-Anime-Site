import axios from "axios";
import React, { useEffect, useState } from "react";
import CardPage from "../Card/Card";

const HomePage = () => {
  const [HomePageState, setHomePageState] = useState([]);
  const HomePageApi = async () => {
    await axios
      .get(
        "https://api.jikan.moe/v4/anime?q=One Piece, Draon Ball Super, Kimetsu No Yaiba, Bleach, Attack On Titan&sfw&limit=90"
      )
      .then((resp) => {
        console.log(resp.data.data);
        return setHomePageState(resp.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    HomePageApi();
  }, []);

  return (
    <div>
      {HomePageState.map((item, index) => {
        return <CardPage key={index} image={item.images.webp.image_url} />;
      })}
    </div>
  );
};

export default HomePage;
