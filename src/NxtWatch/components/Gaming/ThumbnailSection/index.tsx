import React from "react";
import { Thumbnail, ThumbnailText } from "../styles";

interface Props {
  thumbnailUrl: string;
}

const ThumbnailSection: React.FC<Props> = ({ thumbnailUrl }) => (
  <ThumbnailText>
    <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
  </ThumbnailText>
);

export default ThumbnailSection;
