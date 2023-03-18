import axios from "axios";
import React, { useEffect, useState } from "react";
import CardPage from "../Card/Card";
import "./HomePage.css";
const HomePage = () => {
  const [HomePageState, setHomePageState] = useState([]);
  const HomePageApi = async () => {
    await axios
      .get(
        "https://api.jikan.moe/v4/anime?q=One Piece, Boku no hero academia, Dragon-ball super, Singeki no kyiogin, Nanatsu no taizai&sfw?limit=100"
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
    <div className="HomePage">
      {HomePageState.map((item, index) => {
        return (
          <div key={index} className="Homepage_Card">
            <CardPage
              image={item.images.jpg.image_url}
              title_english={item.title_english}
              title_japanese={item.title_japanese}
              rating={item.score}
              detail={item.synopsis}
              imageL={item.images.jpg.large_image_url}
              video={item.trailer.embed_url}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
