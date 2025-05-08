import React from "react";
import { formatDistanceToNow } from "date-fns";
import VideoPlayer from "../VideoPlayer";
import VideoActions from "../VideoAction";
import ChannelInfo from "../ChannelInfo";
import {
  VideoDetailContainer,
  VideoTextContainer,
  VideoTitle,
  LikesAndViewsContainer,
} from "../styles";
import VideoMetaData from "../VideoMetaData";
import VideoDescription from "../VideoDescription";
import { useTheme } from "../../../../Common/Context/ThemeContext";

const VideoInfoSection = ({ videoDetails }: { videoDetails: any }) => {
  const { isDarkTheme } = useTheme();
  const postedAt = formatDistanceToNow(new Date(videoDetails.publishedAt));
  const formattedPostedAt = postedAt.split(" ").slice(1).join(" ");

  return (
    <VideoDetailContainer>
      <VideoPlayer url={videoDetails.videoUrl} />
      <VideoTextContainer>
        <VideoTitle theme={isDarkTheme}>{videoDetails.title}</VideoTitle>
        <LikesAndViewsContainer>
          <VideoMetaData
            viewCount={videoDetails.viewCount}
            formattedPostedAt={formattedPostedAt}
          />
          <VideoActions
            videoDetails={videoDetails}
            like={videoDetails.like}
            dislike={videoDetails.dislike}
            onLike={() => videoDetails.toggleLike()}
            onDislike={() => videoDetails.toggleDislike()}
          />
        </LikesAndViewsContainer>
        <hr />
        <ChannelInfo
          channel={videoDetails.channel}
          theme={isDarkTheme ? "dark" : "light"}
        />
        <VideoDescription
          description={videoDetails.description}
          isDarkTheme={isDarkTheme}
        />
      </VideoTextContainer>
    </VideoDetailContainer>
  );
};

export default VideoInfoSection;
