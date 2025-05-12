import { VideoDescriptionText } from "./styledComponents";

const VideoDescription = ({
  description,
  isDarkTheme,
}: {
  description: string;
  isDarkTheme: boolean;
}) => (
  <VideoDescriptionText theme={isDarkTheme}>{description}</VideoDescriptionText>
);

export default VideoDescription;
