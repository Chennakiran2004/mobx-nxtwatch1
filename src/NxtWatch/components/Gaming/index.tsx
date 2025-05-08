import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Layout from "../../../Common/components/Layout";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import GamingMenu from "./GamingMenu";
import VideoList from "./VideosList";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";
import { GamingMainContainer, MainBody, GamingContainer } from "./styles";
import useGamingStore from "../../hooks/useGamingStore";
import { flowResult } from "mobx";

const Gaming: React.FC = observer(() => {
  const { gamingStore } = useGamingStore();
  const { videosList, fetchVideos } = gamingStore;

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return (
    <Layout>
      <GamingMainContainer data-testid="gaming-container">
        <MainBody>
          <GamingContainer>
            <GamingMenu />
            <LoaderWrapper
              onFetch={() => flowResult(fetchVideos())}
              retries={3}
              retryDelay={2000}
              loadingComponent={<Loader />}
              errorComponent={({ retry }) => <NoResults onRetry={retry} />}
            >
              {gamingStore.videosList.length === 0 ? (
                <NoResults onRetry={fetchVideos} />
              ) : (
                <VideoList videos={videosList} />
              )}
            </LoaderWrapper>
          </GamingContainer>
        </MainBody>
      </GamingMainContainer>
    </Layout>
  );
});

export default Gaming;
