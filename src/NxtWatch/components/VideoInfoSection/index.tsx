import React from "react";
import {
  VideoTextContainer,
  VideoTitle,
  VideoDetailsContainer,
  VideoDetailsContainer2,
  VideoDetailsText,
} from "./styledComponent";
import { formatDistanceToNow } from "date-fns";

interface VideoInfoSectionProps {
  title: string;
  viewCount: number | string;
  theme: string;
  channelName?: string;
  publishedAt?: string;
  cardType: "home" | "trending" | "gaming" | "saved";
}

const VideoInfoSection: React.FC<VideoInfoSectionProps> = ({
  title,
  viewCount,
  theme,
  channelName,
  publishedAt,
  cardType,
}) => {
  let postedAt = "";
  if (publishedAt) {
    postedAt = formatDistanceToNow(new Date(publishedAt));
    const postedAtList = postedAt.split(" ");
    if (postedAtList.length === 3) {
      postedAtList.shift();
      postedAt = postedAtList.join(" ");
    }
  }

  return (
    <VideoTextContainer>
      <VideoTitle theme={theme}>{title}</VideoTitle>
      <VideoDetailsContainer>
        {channelName && <VideoDetailsText>{channelName}</VideoDetailsText>}
        {cardType === "gaming" ? (
          <VideoDetailsText>{viewCount} Watching Worldwide</VideoDetailsText>
        ) : (
          <VideoDetailsContainer2>
            <VideoDetailsText>{viewCount} views</VideoDetailsText>
            {postedAt && <VideoDetailsText>{postedAt} ago</VideoDetailsText>}
          </VideoDetailsContainer2>
        )}
      </VideoDetailsContainer>
    </VideoTextContainer>
  );
};

export default VideoInfoSection;
