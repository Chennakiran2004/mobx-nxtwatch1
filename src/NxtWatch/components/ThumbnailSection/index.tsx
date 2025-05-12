import React from "react";
import { Thumbnail, ChannelLogo, ThumbnailText } from "./styledComponents";

interface Props {
  thumbnailUrl: string;
  profileImageUrl?: string;
  $width?: string;
  $height?: string;
}

const ThumbnailSection: React.FC<Props> = ({
  thumbnailUrl,
  profileImageUrl,
  $width,
  $height,
}) => (
  <ThumbnailText>
    {profileImageUrl && (
      <div>
        <ChannelLogo src={profileImageUrl} alt="channel logo" />
      </div>
    )}
    <Thumbnail 
      src={thumbnailUrl} 
      alt="video thumbnail" 
      $width={$width}
      $height={$height}
    />
  </ThumbnailText>
);

export default ThumbnailSection;
