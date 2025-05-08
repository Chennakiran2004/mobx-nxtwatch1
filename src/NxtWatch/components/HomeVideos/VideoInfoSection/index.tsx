import React from "react";
import {
  VideoTitle,
  VideoTextContainer,
  VideoDetailsContainer,
  VideoDetailsContainer2,
  VideoDetailsText,
} from "../styles";
import { formatDistanceToNow } from "date-fns";

interface Props {
  title: string;
  channelName: string;
  viewCount: number;
  publishedAt: string;
  theme: string;
}

const VideoInfoSection: React.FC<Props> = ({
  title,
  channelName,
  viewCount,
  publishedAt,
  theme,
}) => {
  let postedAt = formatDistanceToNow(new Date(publishedAt));
  const postedAtList = postedAt.split(" ");
  if (postedAtList.length === 3) {
    postedAtList.shift();
    postedAt = postedAtList.join(" ");
  }

  return (
    <VideoTextContainer>
      <VideoTitle theme={theme}>{title}</VideoTitle>
      <VideoDetailsContainer>
        <VideoDetailsText>{channelName}</VideoDetailsText>
        <VideoDetailsContainer2>
          <VideoDetailsText>{viewCount} views</VideoDetailsText>
          <VideoDetailsText>{postedAt} ago</VideoDetailsText>
        </VideoDetailsContainer2>
      </VideoDetailsContainer>
    </VideoTextContainer>
  );
};

export default VideoInfoSection;
