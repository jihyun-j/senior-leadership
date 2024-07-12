import React from "react";
import { VideoResourcePropsType } from "../../../types/categories";
import ReactPlayer from "react-player";

const VideoResource: React.FC<VideoResourcePropsType> = ({ url, onEnded }) => {
  return <ReactPlayer url={url} onEnded={onEnded}></ReactPlayer>;
};

export default VideoResource;
