import React from "react";
import "./CardModal.css";

const CardModal = ({
  SetIsOpen,
  imageL,
  title_english,
  title_japanese,
  rating,
  detail,
}) => {
  return (
    <span className="overlay">
      <div className="Modal">
        <div className="Modal_header">
          <p className="Modal_img">
            <img src={imageL} alt={title_english} style={{ height: "290px",alignContent:"center" }} />
          </p>
          <p>{title_english}</p>
          <p>{title_japanese}</p>
          <p>{rating}</p>
        </div>

        <div>
          <p>{detail}</p>

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
