import React from "react";
import ReactPlayer from "react-player";
import { PlayerContainer } from "./styledComponents";

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => (
  <PlayerContainer>
    <ReactPlayer url={url} controls width="100%" height="100%" />
  </PlayerContainer>
);

export default VideoPlayer;
