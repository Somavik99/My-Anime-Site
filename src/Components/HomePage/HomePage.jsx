import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const HomePage = () => {
  const [HomePageState, setHomePageState] = useState([]);
  const HomePageApi = async () => {
    await axios
      .get(
        "https://api.jikan.moe/v4/anime?q=One Piece, Draon Ball Super, Kimetsu No Yaiba, Bleach, Attack On Titan&sfw&limit=90"
      )
      .then((resp) => {
        console.log(resp.data.data);
        setHomePageState(resp.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    HomePageApi();
  }, []);

  return (
    <>
      {HomePageState.map((item, index) => {
        return (
          <div key={index}>
            <Card image={item.images.jpg.image_url} />
          </div>
        );
      })}
    </>
  );
};

export default HomePage;
