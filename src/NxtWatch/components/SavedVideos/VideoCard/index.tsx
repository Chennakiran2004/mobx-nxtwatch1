import React from "react";
import { SavedVideo } from "../../../types/SavedVideo";
import TrendingVideoCard from "../../Trending/VideoCard";

interface VideoCardProps {
  video: SavedVideo;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const videoDetails = {
    ...video,
    viewCount: parseInt(video.viewCount, 10),
  };

  return <TrendingVideoCard videoDetails={videoDetails} key={video.id} />;
};

export default VideoCard;
