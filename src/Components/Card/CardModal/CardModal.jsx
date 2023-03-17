import { Button } from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
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
                  background: "rgb(255,255,255)",
                }}
                leftIcon={
                  <CiPlay1
                    style={{
                      color: "black",
                      fontSize: "24px",
                      marginLeft: "5px",
                      marginRight: "-5px",
                    }}
                  />
                }
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Play Trailer"
              ></Button>
            </p>
            <Tooltip anchorSelect="#my-tooltip" content="Play Trailer" />
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
