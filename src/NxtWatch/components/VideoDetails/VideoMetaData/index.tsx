import React from "react";
import { ViewsAndPostedContainer, ViewsText } from "../styles";

const VideoMetaData = ({
  viewCount,
  formattedPostedAt,
}: {
  viewCount: string;
  formattedPostedAt: string;
}) => (
  <ViewsAndPostedContainer>
    <ViewsText>{viewCount} views</ViewsText>
    <ViewsText>{formattedPostedAt} ago</ViewsText>
  </ViewsAndPostedContainer>
);

export default VideoMetaData;
