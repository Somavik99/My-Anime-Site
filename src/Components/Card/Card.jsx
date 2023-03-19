import "./Card.css";
import React, { useState } from "react";
import { Button, Card } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import CardModal from "./CardModal/CardModal";
const CardPage = ({
  image,
  title_english,
  title_japanese,
  rating,
  detail,
  imageL,
  video,
}) => {
  const [IsOpen, SetIsOpen] = useState(false);
  return (
    <div className="CardPage">
      <Card
        className="Card"
        style={{
          // background: "black",
          color: "whitesmoke",
          boxShadow: "0.5rem 0.5rem 0.8rem 0.8rem  rgba(0,0,0, 0.3)",
        }}
      >
        <p className="Card_image">
          <img src={image} style={{ borderRadius: "4px" }} />
        </p>

        <p style={{ color: "whitesmoke", overflow: "hidden" }}>
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
              boxShadow: "0.3rem 0.3rem 0.3rem 0.1rem  rgba(0,0,0,0.3)",
              float: "inline-end",
            }}
            onClick={() => SetIsOpen(true)}
            className="Card_btn"
          >
            View
          </Button>
          {IsOpen && (
            <CardModal
              SetIsOpen={SetIsOpen}
              image={image}
              titleEng={title_english}
              titleJap={title_japanese}
              rating={rating}
              detail={detail}
              imageL={imageL}
              video={video}
            />
          )}
        </p>
      </Card>
    </div>
  );
};

export default CardPage;
