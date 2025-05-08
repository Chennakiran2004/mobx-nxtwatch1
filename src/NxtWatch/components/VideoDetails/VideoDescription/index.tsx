import React from "react";
import { VideoDescriptionText } from "../styles";

const VideoDescription = ({
  description,
  isDarkTheme,
}: {
  description: string;
  isDarkTheme: boolean;
}) => (
  <VideoDescriptionText theme={isDarkTheme}>{description}</VideoDescriptionText>
);

export default VideoDescription;
