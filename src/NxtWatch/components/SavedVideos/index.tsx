import React from "react";
import VideoList from "../VideosList";
import PageMenu from "../../../Common/components/PageMenu";
import NoResults from "../../../Common/components/NoResults";
import { SavedVideosMainContainer, SavedVideosContainer } from "./styles";
import { BaseVideo } from "../../../Common/types/BaseVideo";
import { RiMenuAddLine } from "react-icons/ri";

type SavedVideosProps = {
  videos: BaseVideo[];
};

const SavedVideos: React.FC<SavedVideosProps> = ({ videos }) => {
  return (
    <SavedVideosMainContainer>
      <PageMenu title="saved videos" icon={RiMenuAddLine} />
      <SavedVideosContainer>
        {videos.length === 0 ? (
          <NoResults onRetry={() => {}} />
        ) : (
          <VideoList videos={videos} />
        )}
      </SavedVideosContainer>
    </SavedVideosMainContainer>
  );
};

export default SavedVideos;
