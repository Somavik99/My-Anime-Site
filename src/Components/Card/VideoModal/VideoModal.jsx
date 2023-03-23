import { Button } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import React from "react";
import "./VideoModal.css";
import { GrClose } from "react-icons/gr";

const VideoModal = ({ titleEng, titleJap, video, setIsOpenVideo }) => {
  const CloseModal = () => {
    return setIsOpenVideo(false);
  };
  return (
    <div className="overlay">
      <div className="Video_container">
        <Button
          leftIcon={<GrClose />}
          onClick={CloseModal}
          style={{ float: "right" }}
        ></Button>
        <h1>
          Title: <h2>{titleEng}</h2>
          <h2>{titleJap}</h2>
        </h1>
        <div>
          <AspectRatio maxW="560px" ratio={1}>
            <iframe title="naruto" src={video} allowFullScreen />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
