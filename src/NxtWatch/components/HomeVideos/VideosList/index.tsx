import React from "react";
import VideoCard from "../VideoCard";
import { VideosList } from "../styles";
import { HomeVideoDetails } from "../../../types/HomeVidos";

interface VideoListProps {
  videos: HomeVideoDetails[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => (
  <VideosList data-testid="home-success-view">
    {videos.map((video) => (
      <VideoCard key={video.id} videoDetails={video} />
    ))}
  </VideosList>
);

export default VideoList;
