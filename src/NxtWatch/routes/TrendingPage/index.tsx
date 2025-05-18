import React, { useEffect } from "react";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import TrendingVideos from "../../components/TrendingVideos";
import useTrendingStore from "../../hooks/useTrendingStore";
import { observer } from "mobx-react-lite";

const TrendingPage: React.FC = observer(() => {
  const { trendingStore } = useTrendingStore();
  const { videosList, fetchVideos, apiStatus, error } = trendingStore;

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <LoaderWrapper
      onFetch={fetchVideos}
      status={apiStatus}
      error={error}
      loadingComponent={<Loader />}
      errorComponent={({ retry }) => <NoResults onRetry={retry} />}
    >
      <TrendingVideos videos={videosList} />
    </LoaderWrapper>
  );
});

export default TrendingPage;
