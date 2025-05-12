import React from "react";
import VideoCard from "../../VideoCard";
import { VideosList } from "../styles";
import { SavedVideo } from "../../../types/SavedVideo";

interface VideoListProps {
  videos: SavedVideo[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => (
  <VideosList data-testid="saved-videos">
    {videos.map((video) => (
      <VideoCard
        key={video.id}
        id={video.id}
        thumbnailUrl={video.thumbnailUrl}
        title={video.title}
        viewCount={
          typeof video.viewCount === "string"
            ? parseInt(video.viewCount, 10)
            : video.viewCount
        }
        profileImageUrl={video.channel.profileImageUrl}
        channelName={video.channel.name}
        publishedAt={video.publishedAt}
        cardType="saved"
      />
    ))}
  </VideosList>
);

export default VideoList;
