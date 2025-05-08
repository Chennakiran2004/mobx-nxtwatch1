import React from "react";
import { Thumbnail, ChannelLogo, ThumbnailText } from "../styles";
import { TrendingVideoDetails } from "../../../types/TrendingVideos";

interface Props {
  videoDetails: TrendingVideoDetails;
}

const ThumbnailSection: React.FC<Props> = ({ videoDetails }) => {
  const { thumbnailUrl, channel } = videoDetails;
  const { profileImageUrl } = channel;

  return (
    <ThumbnailText>
      <div>
        <ChannelLogo src={profileImageUrl} alt="channel logo" />
      </div>
      <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
    </ThumbnailText>
  );
};

export default ThumbnailSection;
