import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../Common/Context/ThemeContext";
import { useActiveMenu } from "../../../../Common/Context/ActiveMenuContext";
import { GamingVideoDetails } from "../../../types/GamingVideos";

import {
  VideoCardContainer,
  Thumbnail,
  ThumbnailText,
  VideoTitle,
  VideoTextContainer,
  VideoDetailsContainer,
  VideoDetailsText,
} from "../styles";

interface VideoCardProps {
  gameDetails: GamingVideoDetails;
}

const VideoCard: React.FC<VideoCardProps> = ({ gameDetails }) => {
  const { thumbnailUrl, viewCount, title, id } = gameDetails;
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
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <ThumbnailText>
          <VideoTextContainer>
            <VideoTitle theme={theme}>{title}</VideoTitle>
            <VideoDetailsContainer>
              <VideoDetailsText>
                {viewCount} Watching Worldwide
              </VideoDetailsText>
            </VideoDetailsContainer>
          </VideoTextContainer>
        </ThumbnailText>
      </Link>
    </VideoCardContainer>
  );
};

export default VideoCard;
