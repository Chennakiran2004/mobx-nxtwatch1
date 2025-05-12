import React from "react";
import VideoCard from "../../VideoCard";
import { VideosList } from "../styles";
import { GamingVideoDetails } from "../../../types/GamingVideos";

interface VideoListProps {
  videos: GamingVideoDetails[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => (
  <VideosList data-testid="gaming-success-view">
    {videos.map((game) => (
      <VideoCard
        id={game.id}
        thumbnailUrl={game.thumbnailUrl}
        title={game.title}
        viewCount={game.viewCount}
        cardType="gaming"
      />
    ))}
  </VideosList>
);

export default VideoList;
