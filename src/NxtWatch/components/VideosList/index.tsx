import React from "react";
import VideoCard from "../VideoCard";
import { VideosList } from "./styledComponent";
import { BaseVideo } from "../../../Common/types/BaseVideo";

interface VideoListProps {
  videos: BaseVideo[];
  // testId?: string;
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => (
  <VideosList data-testid="video-list">
    {videos.map((video) => (
      <VideoCard key={video.id} {...video} />
    ))}
  </VideosList>
);

export default VideoList;
