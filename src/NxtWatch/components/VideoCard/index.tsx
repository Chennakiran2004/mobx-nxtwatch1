// src/NxtWatch/components/VideoCard/index.tsx

import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../Common/Context/ThemeContext";
import { useActiveMenu } from "../../../Common/Context/ActiveMenuContext";
import { VideoCardContainer } from "./styledComponents";
import ThumbnailSection from "../ThumbnailSection";
import VideoInfoSection from "../VideoInfoSection";

interface VideoCardProps {
  id: string;
  thumbnailUrl: string;
  title: string;
  viewCount: string | number;
  profileImageUrl?: string;
  channelName?: string;
  publishedAt?: string;
  cardType: "home" | "trending" | "gaming" | "saved";
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  thumbnailUrl,
  title,
  viewCount,
  profileImageUrl,
  channelName,
  publishedAt,
  cardType,
}) => {
  const { isDarkTheme } = useTheme();
  const { changeActiveMenu } = useActiveMenu();
  const theme = isDarkTheme ? "dark" : "light";

  let thumbnailWidth = "100%";
  if (cardType === "trending" || cardType === "saved") thumbnailWidth = "50%";
  if (cardType === "gaming") thumbnailWidth = "80%";

  return (
    <VideoCardContainer as={cardType === "home" ? "li" : "div"}>
      <Link
        to={`/videos/${id}`}
        className="link"
        onClick={() => changeActiveMenu("initial")}
      >
        <ThumbnailSection
          thumbnailUrl={thumbnailUrl}
          profileImageUrl={profileImageUrl}
          $width={thumbnailWidth}
          $height="auto"
        />
        <VideoInfoSection
          title={title}
          channelName={channelName || ""}
          viewCount={viewCount}
          publishedAt={publishedAt}
          theme={theme}
          cardType={cardType}
        />
      </Link>
    </VideoCardContainer>
  );
};

export default VideoCard;
