import React from "react";
import { Thumbnail, ChannelLogo, ThumbnailText } from "../styles";

interface Props {
  thumbnailUrl: string;
  profileImageUrl: string;
}

const ThumbnailSection: React.FC<Props> = ({
  thumbnailUrl,
  profileImageUrl,
}) => (
  <ThumbnailText>
    <div>
      <ChannelLogo src={profileImageUrl} alt="channel logo" />
    </div>
    <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
  </ThumbnailText>
);

export default ThumbnailSection;
