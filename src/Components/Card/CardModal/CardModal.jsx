import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import "./CardModal.css";
import VideoModal from "../VideoModal/VideoModal";

const CardModal = ({
  SetIsOpen,
  imageL,
  titleEng,
  titleJap,
  rating,
  detail,
}) => {
  const [IsOpenVideo, setIsOpenVideo] = useState(false);
  const VideoModalBtn = () => {
    return setIsOpenVideo(true);
  };

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
                  position: "relative",
                  borderRadius: "9px",
                  boxShadow: "0.3rem 0.3rem 0.3rem rgba(0,0,0,0.7)",
                }}
              />
            </p>
            <p style={{ marginBottom: "25px" }}>
              <Button
                style={{
                  float: "inherit",
                  position: "static",
                  zIndex: "2",
                  alignItems: "center",
                  marginLeft: "10px",
                  borderRadius: "20px",
                  background: "rgb(0,0,0)",
                  border: "1px solid white",
                }}
                leftIcon={
                  <CiPlay1
                    style={{
                      color: "white",
                      fontSize: "24px",
                      marginLeft: "5px",
                      marginRight: "-5px",
                    }}
                  />
                }
                className="my-tooltip-btn"
                data-tooltip-variant="dark"
                onClick={VideoModalBtn}
              ></Button>
              {IsOpenVideo && (
                <VideoModal titleEng={titleEng} titleJap={titleJap} />
              )}
            </p>
            <Tooltip anchorSelect=".my-tooltip-btn" content="Play Trailer" />
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
            <span style={{ fontWeight: "bolder" }}>Detail: </span>
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
