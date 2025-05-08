import React from "react";
import {
  VideoTextContainer,
  VideoTitle,
  VideoDetailsContainer,
  VideoDetailsContainer2,
  VideoDetailsText,
} from "../styles";
import { TrendingVideoDetails } from "../../../types/TrendingVideos";
import { formatPostedAt } from "../../../utils";

interface Props {
  videoDetails: TrendingVideoDetails;
  theme: string;
}

const VideoInfoSection: React.FC<Props> = ({ videoDetails, theme }) => {
  const { channel, viewCount, title, publishedAt } = videoDetails;
  const { name } = channel;
  const postedAt = formatPostedAt(publishedAt);

  return (
    <VideoTextContainer>
      <VideoTitle theme={theme}>{title}</VideoTitle>
      <VideoDetailsContainer>
        <VideoDetailsText>{name}</VideoDetailsText>
        <VideoDetailsContainer2>
          <VideoDetailsText>{viewCount} views</VideoDetailsText>
          <VideoDetailsText>{postedAt} ago</VideoDetailsText>
        </VideoDetailsContainer2>
      </VideoDetailsContainer>
    </VideoTextContainer>
  );
};

export default VideoInfoSection;
