import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../Common/Context/ThemeContext";
import { useActiveMenu } from "../../../../Common/Context/ActiveMenuContext";
import { GamingVideoDetails } from "../../../types/GamingVideos";
import { VideoCardContainer } from "../styles";
import ThumbnailSection from "../ThumbnailSection";
import VideoInfoSection from "../VideoInfoSection";

interface VideoCardProps {
  gameDetails: GamingVideoDetails;
}

const GamingVideoCard: React.FC<VideoCardProps> = ({ gameDetails }) => {
  const { id } = gameDetails;
  const { isDarkTheme } = useTheme();
  const { changeActiveMenu } = useActiveMenu();
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <VideoCardContainer data-testid="game-body-details">
      <Link
        to={`/videos/${id}`}
        className="link"
        role="link"
        onClick={() => changeActiveMenu("initial")}
      >
        <ThumbnailSection thumbnailUrl={gameDetails.thumbnailUrl} />
        <VideoInfoSection
          title={gameDetails.title}
          viewCount={gameDetails.viewCount}
          theme={theme}
        />
      </Link>
    </VideoCardContainer>
  );
};

export default GamingVideoCard;
