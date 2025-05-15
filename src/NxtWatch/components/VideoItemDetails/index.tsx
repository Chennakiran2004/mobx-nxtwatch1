import React from "react";
import NoResults from "../../../Common/components/NoResults";
import VideoInfoSection from "../VideoInfoDetailsSection";
import { MainBody, VideoItemDetailsContainer } from "./styles";
import { VideoDetailsModel } from "../../stores/Models/VideoDetailsModel";

type Props = {
  videoDetails: VideoDetailsModel | null;
  onRetry: () => void;
};

const VideoItemDetails: React.FC<Props> = ({ videoDetails, onRetry }) => {
  return (
    <MainBody>
      <VideoItemDetailsContainer>
        {videoDetails ? (
          <VideoInfoSection videoDetails={videoDetails} />
        ) : (
          <NoResults onRetry={onRetry} />
        )}
      </VideoItemDetailsContainer>
    </MainBody>
  );
};

export default VideoItemDetails;
