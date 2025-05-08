import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../Common/Context/ThemeContext";
import { useActiveMenu } from "../../../../Common/Context/ActiveMenuContext";
import { VideoCardContainer } from "../styles";
import { TrendingVideoDetails } from "../../../types/TrendingVideos";
import ThumbnailSection from "../ThumbnailSection";
import VideoInfoSection from "../VideoInfoSection";

interface VideoCardProps {
  videoDetails: TrendingVideoDetails;
}

const TrendingVideoCard: React.FC<VideoCardProps> = ({ videoDetails }) => {
  const { id } = videoDetails;
  const { isDarkTheme } = useTheme();
  const { changeActiveMenu } = useActiveMenu();
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <VideoCardContainer>
      <Link
        to={`/videos/${id}`}
        className="link"
        onClick={() => changeActiveMenu("initial")}
      >
        <ThumbnailSection videoDetails={videoDetails} />
        <VideoInfoSection videoDetails={videoDetails} theme={theme} />
      </Link>
    </VideoCardContainer>
  );
};

export default TrendingVideoCard;
