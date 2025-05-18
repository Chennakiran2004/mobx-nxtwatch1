import React from "react";
import { Thumbnail, ThumbnailText } from "./styledComponents";

interface Props {
  thumbnailUrl: string;
  $width?: string;
  $height?: string;
}

const ThumbnailSection: React.FC<Props> = ({
  thumbnailUrl,
  $width,
  $height,
}) => (
  <ThumbnailText>
    <Thumbnail
      src={thumbnailUrl}
      alt="video thumbnail"
      $width={$width}
      $height={$height}
    />
  </ThumbnailText>
);

export default ThumbnailSection;
