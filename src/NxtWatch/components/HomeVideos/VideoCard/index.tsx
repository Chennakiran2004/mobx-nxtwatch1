import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../Common/Context/ThemeContext";
import { useActiveMenu } from "../../../../Common/Context/ActiveMenuContext";
import { HomeVideoDetails } from "../../../types/HomeVidos";
import { VideoCardContainer } from "../styles";
import ThumbnailSection from "../ThumbnailSection";
import VideoInfoSection from "../VideoInfoSection";

interface VideoCardProps {
  videoDetails: HomeVideoDetails;
}

const HomeVideoCard: React.FC<VideoCardProps> = ({ videoDetails }) => {
  const { id } = videoDetails;
  const { isDarkTheme } = useTheme();
  const { changeActiveMenu } = useActiveMenu();
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <VideoCardContainer as="li">
      <Link
        to={`/videos/${id}`}
        className="link"
        onClick={() => changeActiveMenu("initial")}
      >
        <ThumbnailSection
          thumbnailUrl={videoDetails.thumbnailUrl}
          profileImageUrl={videoDetails.channel.profileImageUrl}
        />
        <VideoInfoSection
          title={videoDetails.title}
          channelName={videoDetails.channel.name}
          viewCount={videoDetails.viewCount}
          publishedAt={videoDetails.publishedAt}
          theme={theme}
        />
      </Link>
    </VideoCardContainer>
  );
};

export default HomeVideoCard;
