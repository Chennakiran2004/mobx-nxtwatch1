import React from "react";
import VideoCard from "../../VideoCard";
import { VideosList } from "../styles";
import { HomeVideoDetails } from "../../../types/HomeVidos";

interface VideoListProps {
  videos: HomeVideoDetails[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => (
  <VideosList data-testid="home-success-view">
    {videos.map((video) => (
      <VideoCard
        key={video.id}
        id={video.id}
        thumbnailUrl={video.thumbnailUrl}
        profileImageUrl={video.channel.profileImageUrl}
        title={video.title}
        channelName={video.channel.name}
        viewCount={video.viewCount}
        publishedAt={video.publishedAt}
        cardType="home"
      />
    ))}
  </VideosList>
);

export default VideoList;
