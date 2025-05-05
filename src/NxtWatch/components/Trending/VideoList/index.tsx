import React from "react";
import { VideosList } from "../styles";
import VideoCard from "../VideoCard";
import { TrendingVideoDetails } from "../../../types/TrendingVideos";
interface VideoListProps {
  videos: TrendingVideoDetails[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => (
  <VideosList data-testid="trending-success-view">
    {videos.map((video) => (
      <VideoCard key={video.id} videoDetails={video} />
    ))}
  </VideosList>
);

export default VideoList;
