import { forwardRef, useImperativeHandle, useRef } from "react";
import {
  VideoResourcePropsType,
  VideoResourceRef,
} from "../../../types/categories";
import ReactPlayer from "react-player";

const VideoResource = forwardRef<VideoResourceRef, VideoResourcePropsType>(
  ({ url, onEnded }, ref) => {
    const playerRef = useRef<ReactPlayer>(null);

    useImperativeHandle(ref, () => ({
      getCurrentTime: () => playerRef.current?.getCurrentTime() || 0,
      seekTo: (seconds: number) => {
        playerRef.current?.seekTo(seconds, "seconds");
      },
    }));

    return (
      <ReactPlayer
        url={url}
        controls
        ref={playerRef}
        onEnded={onEnded}
        width="100%"></ReactPlayer>
    );
  }
);

export default VideoResource;
