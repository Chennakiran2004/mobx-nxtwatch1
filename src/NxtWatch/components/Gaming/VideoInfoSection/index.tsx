import React from "react";
import {
  VideoTextContainer,
  VideoTitle,
  VideoDetailsContainer,
  VideoDetailsText,
} from "../styles";

interface Props {
  title: string;
  viewCount: number;
  theme: string;
}

const VideoInfoSection: React.FC<Props> = ({ title, viewCount, theme }) => (
  <VideoTextContainer>
    <VideoTitle theme={theme}>{title}</VideoTitle>
    <VideoDetailsContainer>
      <VideoDetailsText>{viewCount} Watching Worldwide</VideoDetailsText>
    </VideoDetailsContainer>
  </VideoTextContainer>
);

export default VideoInfoSection;
