import { VideoDescriptionText } from "./styledComponents";

const VideoDescription = ({ description }: { description: string }) => (
  <VideoDescriptionText>{description}</VideoDescriptionText>
);

export default VideoDescription;
