import "./Card.css";
import React, { useState } from "react";
import { Button, Card } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import CardModal from "./CardModal/CardModal";
const CardPage = ({ image, title_english, title_japanese, rating }) => {
  const [IsOpen, SetIsOpen] = useState(false);
  return (
    <div className="CardPage">
      <Card
        className="Card"
        style={{
          border: "2px solid rgba(193, 184, 184, 1) ",
          boxShadow: "2.5px 2.5px 2.5px rgba(193, 184, 184, 1)",
        }}
      >
        <p className="Card_image">
          <img src={image} style={{ borderRadius: "4px" }} />
        </p>

        <p style={{ color: "black", overflow: "hidden" }}>
          <span>Title: {title_english}</span>
          <span className="jap_title">{title_japanese}</span>
        </p>
        <p>
          Rating: {rating}
          {<FaStar />}
        </p>
        <p>
          <Button
            variant="ghost"
            leftIcon={<VscPreview />}
            style={{
              boxShadow: "1px 1px 1px rgba(193, 184, 184, 1)",
            }}
            onClick={() => SetIsOpen(true)}
          >
            View
          </Button>
          {IsOpen && <CardModal SetIsOpen={SetIsOpen} />}
        </p>
      </Card>
    </div>
  );
};

export default CardPage;
