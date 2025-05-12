import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Layout from "../../../Common/components/Layout";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import VideoList from "../VideosList";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";
import { TrendingMainContainer, MainBody, TrendingContainer } from "./styles";
import useTrendingStore from "../../hooks/useTrendingStore";
import PageMenu from "../../../Common/components/PageMenu";
import { AiFillFire } from "react-icons/ai";

const TrendingVideos: React.FC = observer(() => {
  const { trendingStore } = useTrendingStore();

  const { videosList, fetchVideos } = trendingStore;

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  function handleRetry(): void {
    throw new Error("Function not implemented.");
  }

  const transformedVideos = videosList.map((video) => ({
    id: video.id,
    thumbnailUrl: video.thumbnailUrl,
    title: video.title,
    viewCount: video.viewCount.toString(),
    cardType: "trending" as const,
    profileImageUrl: video.channel.profileImageUrl,
  }));

  return (
    <Layout>
      <TrendingMainContainer data-testid="trending">
        <MainBody>
          <TrendingContainer data-testid="trending-container">
            <PageMenu title="trending" icon={AiFillFire} />
            <LoaderWrapper
              onFetch={fetchVideos}
              retries={3}
              retryDelay={2000}
              loadingComponent={<Loader />}
              errorComponent={({ retry }) => <NoResults onRetry={retry} />}
            >
              {videosList.length === 0 ? (
                <NoResults onRetry={handleRetry} />
              ) : (
                <VideoList videos={transformedVideos} />
              )}
            </LoaderWrapper>
          </TrendingContainer>
        </MainBody>
      </TrendingMainContainer>
    </Layout>
  );
});

export default TrendingVideos;
