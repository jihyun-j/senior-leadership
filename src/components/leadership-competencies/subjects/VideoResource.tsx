import React from "react";
import { VideoResourcePropsType } from "../../../types/categories";
import ReactPlayer from "react-player";

const VideoResource: React.FC<VideoResourcePropsType> = ({ url, onEnded }) => {
  return (
    <ReactPlayer
      url={url}
      controls
      onEnded={onEnded}
      width="100%"
      height="100%"></ReactPlayer>
  );
};

export default VideoResource;
