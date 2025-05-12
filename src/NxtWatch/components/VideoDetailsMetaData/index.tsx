import { ViewsAndPostedContainer, ViewsText } from "./styledComponents";

const VideoMetaData = ({
  viewCount,
  formattedPostedAt,
}: {
  viewCount: string;
  formattedPostedAt: string;
}) => (
  <ViewsAndPostedContainer>
    <ViewsText>{viewCount} views</ViewsText>
    <ViewsText>{formattedPostedAt} ago</ViewsText>
  </ViewsAndPostedContainer>
);

export default VideoMetaData;
