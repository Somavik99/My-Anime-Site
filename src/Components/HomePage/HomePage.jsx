import axios from "axios";
import React, { useEffect, useState } from "react";
import CardPage from "../Card/Card";
import "./HomePage.css";
const HomePage = () => {
  const [HomePageState, setHomePageState] = useState([]);
  const HomePageApi = async () => {
    await axios
      .get("https://api.jikan.moe/v4/anime?latest")
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
            />
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
