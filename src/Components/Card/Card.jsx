import "./Card.css";
import React from "react";
import { Card } from "@chakra-ui/react";
const CardPage = ({ image, title_english, title_japanese }) => {
  return (
    <div className="CardPage">
      <Card className="Card">
        <p className="Card_image">
          <img src={image} />
        </p>

        <p style={{ color: "black", overflow: "hidden" }}>
          <span sty>Title: {title_english}</span>
          <span className="jap_title">{title_japanese}</span>
        </p>
      </Card>
    </div>
  );
};

export default CardPage;
