import React from "react";
import Layout from "../../../Common/components/Layout";
import NoResults from "../../../Common/components/NoResults";
import SavedMenu from "./SavedMenu";
import VideoList from "./VideoList";
import { SavedVideosMainContainer, SavedVideosContainer } from "./styles";
import useSavedVideosData from "../../hooks/useSavedVideosData";

const SavedVideos: React.FC = () => {
  const { theme, savedVideosList } = useSavedVideosData();

  return (
    <Layout>
      <SavedVideosMainContainer>
        <SavedMenu />
        <SavedVideosContainer>
          {savedVideosList.length === 0 ? (
            <NoResults onRetry={() => {}} />
          ) : (
            <VideoList
              videos={savedVideosList.map((video) => ({
                ...video,
                viewCount: video.viewCount.toString(),
              }))}
            />
          )}
        </SavedVideosContainer>
      </SavedVideosMainContainer>
    </Layout>
  );
};

export default SavedVideos;
