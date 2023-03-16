import { Button } from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";
import "./CardModal.css";

const CardModal = ({
  SetIsOpen,
  imageL,
  titleEng,
  titleJap,
  rating,
  detail,
}) => {
  return (
    <span className="overlay">
      <div className="Modal">
        <div className="Modal_header">
          <p className="Image_cont">
            <p className="Modal_img">
              <img
                src={imageL}
                alt={titleEng}
                style={{
                  height: "290px",
                  alignContent: "center",
                  margin: "5px ",
                  padding: "5px",
                  position:"relative"
                }}
              />
            </p>
            <p style={{marginBottom:"25px"}}>
              <Button style={{ float:"inherit", position: "static",zIndex:"2",alignItems:"center" }}></Button>
            </p>
          </p>
          <p style={{ color: "White" }}>Title: {titleEng}</p>
          <p>{titleJap}</p>
          <p style={{ display: "flex", alignItems: "flex-start" }}>
            Rating: {rating}
            <span>
              <FaStar />
            </span>
          </p>
        </div>

        <div>
          <p style={{ float: "right" }}>
            <span style={{ fontWeight: "bold" }}>Detail: </span>
            {detail}
          </p>

          <div className="Modal_footer">
            <button
              onClick={() => {
                SetIsOpen(false);
              }}
              className="Modal_btn"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </span>
  );
};

export default CardModal;
