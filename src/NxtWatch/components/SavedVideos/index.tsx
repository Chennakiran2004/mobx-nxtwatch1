import React from "react";
import Layout from "../../../Common/components/Layout";
import { useSavedVideos } from "../../../Common/Context/SavedVideosContext";
import { useTheme } from "../../../Common/Context/ThemeContext";
import NoResults from "../../../Common/components/NoResults";
import { SavedVideosMainContainer, SavedVideosContainer } from "./styles";
import SavedMenu from "./SavedMenu";
import VideoList from "./VideoList";

const SavedVideos: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const { savedVideosList } = useSavedVideos();
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <Layout>
      <SavedVideosMainContainer>
        <SavedMenu />
        <SavedVideosContainer>
          {savedVideosList.length === 0 ? (
            <NoResults
              onRetry={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
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
