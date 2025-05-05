import React from "react";
import VideoCard from "../VideoCard";
import { VideosList } from "../styles";
import { SavedVideo } from "../../../types/SavedVideo";

interface VideoListProps {
  videos: SavedVideo[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => (
  <VideosList data-testid="saved-videos">
    {videos.map((video) => (
      <VideoCard video={video} key={video.id} />
    ))}
  </VideosList>
);

export default VideoList;
