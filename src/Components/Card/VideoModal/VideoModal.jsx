import React from "react";
import "./VideoModal.css";

const VideoModal = ({ titleEng, titleJap }) => {
  return (
    <div>
      <div>
        <h1>
          Title: <p>{titleEng}</p>
          <p>{titleJap}</p>
        </h1>
      </div>
      <video src=""></video>
    </div>
  );
};

export default VideoModal;
