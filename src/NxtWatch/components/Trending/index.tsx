import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Layout from "../../../Common/components/Layout";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import TrendingMenu from "./TrendingMenu";
import VideoList from "./VideoList";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";
import { TrendingMainContainer, MainBody, TrendingContainer } from "./styles";
import useTrendingStore from "../../hooks/useTrendingStore";

const Trending: React.FC = observer(() => {
  const { trendingStore } = useTrendingStore();

  const { videosList, fetchVideos } = trendingStore;

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  function handleRetry(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Layout>
      <TrendingMainContainer data-testid="trending">
        <MainBody>
          <TrendingContainer data-testid="trending-container">
            <TrendingMenu />
            <LoaderWrapper
              // key={retryTrigger}
              onFetch={fetchVideos}
              retries={3}
              retryDelay={2000}
              loadingComponent={<Loader />}
              errorComponent={({ retry }) => <NoResults onRetry={retry} />}
            >
              {videosList.length === 0 ? (
                <NoResults onRetry={handleRetry} />
              ) : (
                <VideoList videos={videosList} />
              )}
            </LoaderWrapper>
          </TrendingContainer>
        </MainBody>
      </TrendingMainContainer>
    </Layout>
  );
});

export default Trending;
