import React, { useEffect } from "react";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import TrendingVideos from "../../components/TrendingVideos";
import useTrendingStore from "../../hooks/useTrendingStore";
import { observer } from "mobx-react-lite";

const TrendingPage: React.FC = observer(() => {
  const { trendingStore } = useTrendingStore();
  const { videosList, fetchVideos } = trendingStore;

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return (
    <LoaderWrapper
      onFetch={fetchVideos}
      retries={3}
      retryDelay={2000}
      loadingComponent={<Loader />}
      errorComponent={({ retry }) => <NoResults onRetry={retry} />}
    >
      <TrendingVideos videos={videosList} />
    </LoaderWrapper>
  );
});

export default TrendingPage;
