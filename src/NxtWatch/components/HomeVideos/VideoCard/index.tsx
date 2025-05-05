import React from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { useTheme } from "../../../../Common/Context/ThemeContext";
import { useActiveMenu } from "../../../../Common/Context/ActiveMenuContext";
import {
  VideoCardContainer,
  Thumbnail,
  ChannelLogo,
  ThumbnailText,
  VideoTitle,
  VideoTextContainer,
  VideoDetailsContainer,
  VideoDetailsContainer2,
  VideoDetailsText,
} from "../styles";
import { HomeVideoDetails } from "../../../types/HomeVidos";

interface VideoCardProps {
  videoDetails: HomeVideoDetails;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoDetails }) => {
  const { thumbnailUrl, channel, viewCount, title, id, publishedAt } =
    videoDetails;
  let postedAt = formatDistanceToNow(new Date(publishedAt));
  const postedAtList = postedAt.split(" ");
  if (postedAtList.length === 3) {
    postedAtList.shift();
    postedAt = postedAtList.join(" ");
  }
  const { name, profileImageUrl } = channel;
  const { isDarkTheme } = useTheme();
  const { changeActiveMenu } = useActiveMenu();
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <VideoCardContainer as="li">
      <Link
        to={`/videos/${id}`}
        className="link"
        role="link"
        onClick={() => changeActiveMenu("initial")}
      >
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <ThumbnailText>
          <div>
            <ChannelLogo src={profileImageUrl} alt="channel logo" />
          </div>
          <VideoTextContainer>
            <VideoTitle theme={theme}>{title}</VideoTitle>
            <VideoDetailsContainer>
              <VideoDetailsText>{name}</VideoDetailsText>
              <VideoDetailsContainer2>
                <VideoDetailsText>{viewCount} views</VideoDetailsText>
                <VideoDetailsText>{postedAt} ago</VideoDetailsText>
              </VideoDetailsContainer2>
            </VideoDetailsContainer>
          </VideoTextContainer>
        </ThumbnailText>
      </Link>
    </VideoCardContainer>
  );
};

export default VideoCard;
